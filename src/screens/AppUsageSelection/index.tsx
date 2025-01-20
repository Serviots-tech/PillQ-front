import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CombinedStackParamList } from "../../Navigation/CombineStack";
import { appUsageOptions } from "../../constants/constantData";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, CheckmarkIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { clearGuestUserData, setRegisterAsGuest } from "../../redux/slices/registerAsGuest";
import CustomCheckbox from "../../components/customCheckbox";
import styles from "./style";
import { postApi, putApi } from "../../apis/apis";
import { getValueFromAcessToken } from "../../helpers/jwtHelpers";
import { storeData } from "../../helpers/asyncStorageHelpers";
import DeviceInfo from "react-native-device-info";
import CryptoJS from "crypto-js";
import { setLoginStatus } from "../../redux/slices/isLoggedIn";



const AppUsageSelection: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<CombinedStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [isSubmitClick, setIsSubmitClick] = useState<boolean>(false)
	const [deviceId, setDeviceId] = useState("");

	const dispatch = useDispatch<AppDispatch>()

	const { data: userData, isGuestUser } = useSelector((data: any) => data?.guestUser)

	const handleSubmit = async () => {
		setIsSubmitClick(true)
		setIsLoading(true)
		if (selectedOptions.length) {
			try {
				if (isGuestUser) {
					const guestUserData = {
						...userData, deviceId: deviceId, appUsages: selectedOptions
					}

					const res = await postApi('/auth/register-as-guest', guestUserData)

					const getDeviceId = getValueFromAcessToken(res?.data?.accessToken)
					storeData("accessToken", res?.data?.accessToken)
					storeData("deviceId", getDeviceId)

					dispatch(clearGuestUserData())
					dispatch(setLoginStatus(true))
				}
				else {

					const updateUserData = {
						birthdate: userData.birthdate,
						gender: userData.gender,
						deviceId: deviceId,
						appUsages: selectedOptions
					}

					const res = await putApi('/user/update-user', updateUserData)
					console.log("🚀 ~ handleSubmit ~ res:", res)

					dispatch(setLoginStatus(true))
				}


			} catch (error: any) {
				console.log("🚀 ~ handleSubmit ~ error:", JSON.stringify(error))

			} finally {

				setIsLoading(false)
			}


		}
		setIsLoading(false)
	}
	const handleSelect = (updatedOptions: string[]) => {
		setSelectedOptions(updatedOptions); // Update state when options are selected/deselected
	};

	useEffect(() => {
		if (userData?.appUsages) {
			setSelectedOptions(userData.appUsages);
		}
	}, [userData]);

	useEffect(() => {
		if (selectedOptions.length > 0) {
			dispatch(setRegisterAsGuest({ appUsages: selectedOptions }))
		}
	}, [selectedOptions])

	useEffect(() => {
		const fetchDeviceId = async () => {
			const deviceId = await DeviceInfo.getUniqueId();
			console.log('Device ID:', deviceId);
			try {
				const hashedMessage = CryptoJS.SHA256(deviceId).toString(CryptoJS.enc.Hex);
				setDeviceId(hashedMessage)
			} catch (error) {
				console.error("Error hashing message:", error);
			}
		};

		fetchDeviceId();
	}, []);

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						{<View style={styles.backicon}>
							<CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.BIRTHDAY_SELECTION); }} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
						</View>}
						<View style={styles.progressbarview}>
							<ProgressBar percentage={90} detailsText={"Almost There!"} />
						</View>
						<View>
							<CustomCheckbox options={appUsageOptions} selectedOptions={selectedOptions} onSelect={handleSelect}
								label={"How can we help you stay on track?"} selectedIcon={<CheckmarkIcon />}
								error={isSubmitClick && !selectedOptions.length ? "Please select at least one option to proceed" : null} />
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
			</KeyboardAvoidingView>
		</>
	);
};

export default AppUsageSelection;
