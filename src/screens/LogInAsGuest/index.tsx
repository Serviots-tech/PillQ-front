import CryptoJS from "crypto-js";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import { CustomInputField } from "../../components/customInputField";
import { showToast } from "../../components/customToast/ToastManager";
import { NameIcon } from "../../constants/svgs";
import { storeData } from "../../helpers/asyncStorageHelpers";
import { getValueFromAcessToken } from "../../helpers/jwtHelpers";
import { getUserProfile } from "../../redux/actions/userAction";
import { setLoginStatus } from "../../redux/slices/isLoggedIn";
import { AppDispatch } from "../../redux/store";
import styles from "./style";


interface FormValues {
	name: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required("Please enter your name"),

});

// type LogInProps = NativeStackScreenProps<CombinedStackParamList, 'LogIn'>;

const LogInAsGuest: React.FC= () => {
	const [isLoading, setIsLoading] = useState(false);
	const [deviceId, setDeviceId] = useState("");
	const dispatch = useDispatch<AppDispatch>()

	const initialValues: FormValues = {
		name: "",
	};

	const loginUser = async (values: FormValues) => {
		setIsLoading(true)
		try {
			const res = await postApi('/auth/login', { ...values, deviceId })
			showToast({
				text: `${res?.data?.message}`,
				duration: 3000,
				type: 'success'
			})
			const getDeviceId = getValueFromAcessToken(res?.data?.accessToken)
			storeData("accessToken", res?.data?.accessToken)
			storeData("deviceId", getDeviceId)

			// fetch profile
			dispatch(getUserProfile())

			// changes in isloggedIn functionz 
			dispatch(setLoginStatus(true))

		}
		catch (error: any) {
			if (error?.response?.data?.error?.code === 103) {
				console.log("User not verified")
				showToast({
					text: `${error?.response?.data?.error?.errorDescription}`,
					duration: 13000,
					type: 'info'
				})
				// navigation?.navigate(navigationStrings?.VERIFY_EMAIL)

			}
			if (error?.response?.data?.error?.code === 104) {
				console.log("Invalid Credentials")
				showToast({
					text: `${error?.response?.data?.error?.errorDescription}`,
					duration: 13000,
					type: 'error'
				})
			}
			if (error?.response?.data?.error?.code === 105) {
				console.log("Buy subscription to move forward.")
				showToast({
					text: `${error?.response?.data?.error?.errorDescription}`,
					duration: 13000,
					type: 'warning'
				})
			}
		}
		finally {
			setIsLoading(false)
		}
	}


	useEffect(() => {
		const fetchDeviceId = async () => {
			const deviceId = await DeviceInfo.getUniqueId();
			console.log('Device ID:', deviceId);
			try {
				const hashedMessage = CryptoJS.SHA256(deviceId).toString(CryptoJS.enc.Hex);
				console.log("Hashed Message:", hashedMessage);
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
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values: any) => {
						// loginUser(values)
					}}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
					}: FormikProps<FormValues>) => (

						<View style={styles.container}>
							<View>
								<View style={styles.backicon}>
									{/* <CustomButton
										label={"Back"}
										buttonTextStyle={styles.backBtn}
										onPress={() => { navigation.navigate(navigationStrings.WELCOME); }}
										icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} /> */}
								</View>
								{/* <View style={styles.titletext}>
									<Text style={styles.title}>Log in to your account</Text>
									<Text style={styles.subtitle}>Welcome! Please enter your details</Text>
								</View> */}

								<CustomInputField
									fieldName="name"
									value={values.name}
									onChangeText={handleChange}
									onBlur={handleBlur}
									touched={touched.name}
									errors={errors.name}
									placeholder="Enter your name"
									icon={<NameIcon />}
								/>
								
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
					)}
				</Formik>

			</KeyboardAvoidingView>
		</>
	);
};

export default LogInAsGuest;
