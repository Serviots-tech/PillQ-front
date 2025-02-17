import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { CheckmarkIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import CustomRadioButton from "../../components/customRadioButton";
import { howOftenEveryDayOptions } from "../../constants/constantData";
import BackButtonComponent from "../../components/backButton";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAddMedicine } from "../../redux/slices/addMedicine";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { navigationStrings } from "../../constants/navigationStrings";

const HowOftenEveryDay: React.FC = () => {
	
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const dispatch = useDispatch<AppDispatch>()
	const { data: addMedData } = useSelector((data: any) => data?.addMedicine)

	const handleSelect = (option: string) => {
		dispatch(setAddMedicine({ dosePerDay: option }))
		navigation.navigate(navigationStrings.PILL_PLANNER)
	}
	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<BackButtonComponent centerText={`${addMedData?.name?.toLowerCase().length > 10 ? addMedData?.name?.toLowerCase().substring(0, 12) + '...' : addMedData?.name?.toLowerCase() },${addMedData?.medicineForm.toLowerCase()}`} />
						<View style={styles.progressbarview}>
							<ProgressBar percentage={30} detailsText={"Getting to Know You"} />
						</View>
						<View>
							<CustomRadioButton options={howOftenEveryDayOptions} selectedOption={null} onSelect={handleSelect}
								label={"How often do you take it?"} selectedIcon={<CheckmarkIcon />}
								error={null} />
						</View>
					</View>


				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default HowOftenEveryDay;
