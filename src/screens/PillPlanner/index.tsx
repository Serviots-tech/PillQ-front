import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import ProgressBar from "../../components/progressBar";
import BackButtonComponent from "../../components/backButton";
import { useSelector } from "react-redux";
import styles from "./style";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from "../../components/customButton";
import { postApi, putApi } from "../../apis/apis";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { navigationStrings } from "../../constants/navigationStrings";
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { showToast } from "../../components/customToast/ToastManager";
import { formatTime } from "../../helpers/helper";

const PillPlanner: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const { data: addMedData } = useSelector((state: any) => state?.addMedicine);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedTime, setSelectedTime] = useState("08:00");
	const [isLoading, setIsLoading] = useState(false)

	const showDatePicker = () => setDatePickerVisibility(true);
	const hideDatePicker = () => setDatePickerVisibility(false);

	const handleConfirm = (date: Date | null) => {

		if (date) {
			const timeString = date.toString()
			const formattedTime = formatTime(timeString)
			setSelectedTime(formattedTime);
		}
		hideDatePicker();
	};


	const handleSubmit = async () => {
		setIsLoading(true)
		try {
			const data = await postApi('/medicine/create', { medicineName: addMedData.name, medicineForm: addMedData.medicineForm, timingSetup: addMedData?.timingSetup, dosePerDay: addMedData?.dosePerDay, startTime: selectedTime })

			// if (!data?.data?.data?.deviceToken) {
			// 	const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
			// 	if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			// 		const fcmToken = await messaging().getToken();

			// 		await putApi('/user/update-firebase-token', { firebaseToken: fcmToken })
			// 	}
			// }

			let fcmToken;

			if (Platform.OS === "android") {
				const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					fcmToken = await messaging().getToken()
				}
			}
			else {
				const authStatus = await messaging().requestPermission();
				const enabled =
					authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
					authStatus === messaging.AuthorizationStatus.PROVISIONAL;

				if (enabled) {
					fcmToken = await messaging().getToken()
				}
			}
			if (!fcmToken) {
				fcmToken = await messaging().getToken();
			}
			const res = await putApi('/user/update-firebase-token', { firebaseToken: fcmToken })


			// navigation.navigate(navigationStrings.HOME)
			navigation.reset({
				index: 0,
				routes: [{ name: navigationStrings.HOME }],
			});

		} catch (error: any) {
			console.log("🚀 ~ handleSubmit ~ error:", error)
			showToast({
				text: `${error?.response?.data?.error?.errorDescription ?? "Some thing went Wrong"}`,
				duration: 3000,
				type: 'error'
			})
		}
		finally {
			setIsLoading(false)
		}

	}

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<View>
							<BackButtonComponent
								centerText={`${addMedData?.name?.toLowerCase().length > 10 ? addMedData?.name?.toLowerCase().substring(0, 12) + '...' : addMedData?.name?.toLowerCase() }, ${addMedData?.medicineForm.toLowerCase()}`}
							/>
							<View style={styles.progressbarview}>
								<ProgressBar percentage={30} detailsText="Getting to Know You" />
							</View>
							<Text style={styles.title}>When do you need to take the dose?</Text>

							<View style={styles.row}>
								<Text style={styles.label}>Take</Text>
								<TouchableOpacity style={styles.inputBox}>
									<Text style={styles.text}>1 Pill(s)</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.row}>
								<Text style={styles.label}>Time</Text>
								<TouchableOpacity style={styles.inputBox} onPress={() => {!isLoading && showDatePicker()}}>
									<Text style={styles.text}>{selectedTime}</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View>
						<CustomButton
							onPress={handleSubmit}
							label={"Next"}
							buttonTextStyle={styles.buttonText}
							viewStyle={styles.button}
							isLoading={isLoading}
						/>
					</View>
				</View>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="time"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}
					locale="en_GB"
				/>
			</KeyboardAvoidingView>
		</>
	);
};

export default PillPlanner;
