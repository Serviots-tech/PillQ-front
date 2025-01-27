import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../Navigation/Routes";
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, IosbackIcon } from "../../constants/svgs";
import { retrieveData } from "../../helpers/asyncStorageHelpers";
import styles from "./style"; // Adjust the path as per your project structure
import { showToast } from "../../components/customToast/ToastManager";

const VerifyEmail = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]); // Adjusted for 6 digits
	const inputRefs = useRef<TextInput[]>([]);
	const [email, setEmail] = useState<string>("");
	const [isResendDisabled, setIsResendDisabled] = useState(false);
	const [timer, setTimer] = useState(180); // 3 minutes in seconds

	const handleOtpChange = (text: string, index: number) => {
		if (index === 0 && text.length > 1) {
			if (/^\d{6}$/.test(text)) {
				const newOtp = text.split("");
				setOtp(newOtp);
				inputRefs.current[5]?.focus();
			} else {
				// Handle invalid paste (e.g., show an error message)
			}
		} else {
			const newOtp = [...otp];
			newOtp[index] = text;
			setOtp(newOtp);

			if (text && index < otp.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	useEffect(() => {
		const getEmail = async () => {
			try {
				const email = await fetchAsyncStorageData();
				if (email) {
					setEmail(email.toString());
				}
			} catch (error) {
				console.log("🚀 ~ getEmail ~ error:", error)
			}
		};

		getEmail();
	}, []);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isResendDisabled && timer > 0) {
			interval = setInterval(() => {
				setTimer((prevTimer) => {
					if (prevTimer === 1) {
						setIsResendDisabled(false);
						clearInterval(interval);
					}
					return prevTimer - 1;
				});
			}, 1000);
		}

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [isResendDisabled, timer]);

	const fetchAsyncStorageData = async () => {
		const registerEmail = await retrieveData("email");
		return registerEmail;
	};

	const handleBackspace = (text: string, index: number) => {
		if (!text && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handleResend = async () => {
		if (!isResendDisabled) {
			setIsResendDisabled(true);
			setTimer(180);
		}

		try {
			await postApi("/auth/resend-otp", { email: email })
			//display toast message
		} catch (error: any) {
		console.log("🚀 ~ handleResend ~ error:", error)

		}
	};

	const handleVerify = async () => {
		const otpString = otp.join("");
		if (otpString.length !== 6 || !/^\d{6}$/.test(otpString)) {
			return;
		}

		setIsLoading(true);
		try {
			await postApi("/auth/registration-otp-verification", { otp: otpString, email: email });
			navigation.navigate(navigationStrings.LOGIN)
		} catch (error: any) {
			showToast({
				text: `${error?.response?.data?.error?.errorDescription}` || "Something went wrong",
				duration: 3000,
				type: 'error'
			})
			setOtp(["", "", "", "", "", ""])
			inputRefs.current[0]?.focus()


		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<SafeAreaView />
			<View style={styles.container}>
				<View>
					<View style={styles.backicon}>
						<CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => navigation.goBack()} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
					</View>

					<Text style={styles.title}>Check your email</Text>
					<Text style={styles.subtitle}>We have sent an OTP to {email}</Text>

					<View style={styles.fieldContainer}>
						<View style={styles.otpContainer}>
							{otp.map((value, index) => (
								<TextInput
									key={index}
									ref={(ref) => (inputRefs.current[index] = ref!)}
									style={[styles.input]}
									keyboardType="numeric"
									value={value}
									maxLength={index === 0 ? 6 : 1}
									// maxLength=
									onChangeText={(text) => handleOtpChange(text, index)}
									onKeyPress={({ nativeEvent }) => {
										if (nativeEvent.key === "Backspace") {
											handleBackspace(value, index);
										}
									}}
								/>
							))}
						</View>
					</View>
					<Text style={styles.footer}>
						Don't receive the OTP?</Text>
					<TouchableOpacity onPress={handleResend} disabled={isResendDisabled}>
						<Text style={isResendDisabled ? styles.disabledLink : styles.link}>
							{isResendDisabled ? `Resend in ${timer}s` : "Resend Now"}

						</Text>
					</TouchableOpacity>
				</View>
				<View>


					<CustomButton
						onPress={handleVerify}
						label={"Verify Email"}
						buttonTextStyle={styles.buttonText}
						viewStyle={styles.button}
						isLoading={isLoading}
					/>
				</View>
			</View>
		</>
	);
};

export default VerifyEmail;
