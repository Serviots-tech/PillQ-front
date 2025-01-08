import React, { useEffect, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import CustomButton from "../../components/customButton";
import { BackIcon, EmailIcon, PasswordIcon } from "../../constants/svgs";
import styles from "./style";
import { CustomInputField } from "../../components/customInputField";
import { CustomPasswordInput } from "../../components/customPasswordField";
import { retrieveData } from "../../helpers/asyncStorageHelpers";
import { navigationStrings } from "../../constants/navigationStrings";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AuthStack";
import { postApi } from "../../apis/apis";

interface ResetPasswordFormValues {
    email: string;
    newPassword: string;
    confirmPassword: string;
    otp: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must include uppercase, lowercase, number, and special character."
        )
        .required("New password is required"),
    confirmPassword: Yup.string().trim()
        .nullable()
        .oneOf([Yup.ref("newPassword")], "Passwords do not match. Please try again")
        .required("Please confirm your password"),
    otp: Yup.string()
        .matches(/^\d{6}$/, "OTP must be exactly 6 digits and only numbers")
        .required("Please enter OTP"),
});
const ResetPassword: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState<string>("");
    const [initialValues, setInitialValues] = useState<ResetPasswordFormValues>({
        email: "",
        newPassword: "",
        confirmPassword: "",
        otp: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const [timer, setTimer] = useState(180);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const fetchAsyncStorageData = async () => {
        const registerEmail = await retrieveData("email");
        return registerEmail;
    };

    useEffect(() => {
        const getEmail = async () => {
            try {
                const storedEmail = await fetchAsyncStorageData();
                if (storedEmail) {
                    setEmail(storedEmail.toString());
                    setInitialValues((prevValues) => ({
                        ...prevValues,
                        email: storedEmail.toString(),
                    }));
                }
            } catch (error) {
                console.error("Error fetching email from AsyncStorage:", error);
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

        return () => clearInterval(interval);
    }, [isResendDisabled, timer]);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handlePasswordReset = async (values: ResetPasswordFormValues) => {
        setIsLoading(true);
        try {
            const { confirmPassword, ...rest } = values
            await postApi('/auth/reset-password', { ...rest })
            navigation.navigate(navigationStrings.LOGIN)
            console.log("Success")
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <SafeAreaView />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: keyboardVisible ? 250 : 0 }}>
                    <View style={styles.container}>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handlePasswordReset}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }: FormikProps<ResetPasswordFormValues>) => (
                                <>
                                    <View>
                                        <View style={styles.backIcon}>
                                            <CustomButton
                                                label="Back"
                                                onPress={() => console.log("Back pressed")}
                                                buttonTextStyle={styles.backBtn}
                                                icon={<BackIcon />}
                                            />
                                        </View>
                                        <Text style={styles.title}>Reset your password</Text>
                                        <Text style={styles.subtitle}>
                                            We’ve sent an OTP to your email address:{" "}
                                            <Text style={styles.emailHighlight}>
                                                {email}
                                            </Text>
                                        </Text>
                                        <Text style={styles.subtitle}>Enter the OTP and create a new password to secure your account.</Text>

                                        <CustomInputField
                                            fieldName="email"
                                            label="Email"
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                            touched={touched.email}
                                            errors={errors.email}
                                            placeholder="Enter your email"
                                            icon={<EmailIcon />}
                                            isDisable={true}
                                            keyboardType="email-address"
                                        />
                                        <CustomPasswordInput
                                            fieldName="newPassword"
                                            label="Enter new password"
                                            value={values.newPassword}
                                            onChangeText={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched.newPassword}
                                            errors={errors.newPassword}
                                            placeholder="Enter your new password"
                                            icon={<PasswordIcon />}
                                        />
                                        <CustomPasswordInput
                                            fieldName="confirmPassword"
                                            label="Confirm Password"
                                            value={values.confirmPassword}
                                            onChangeText={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched.confirmPassword}
                                            errors={errors.confirmPassword}
                                            placeholder="Re-Enter your password"
                                            icon={<PasswordIcon />}
                                        />
                                        <CustomInputField
                                            fieldName="otp"
                                            label="Enter OTP"
                                            value={values.otp}
                                            onChangeText={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched.otp}
                                            errors={errors.otp}
                                            placeholder="Enter your otp"
                                            icon={<EmailIcon />}
                                            max={6}
                                        />
                                        <Text style={styles.resendText}>
                                            Don’t receive the OTP?{" "}
                                            <Text style={styles.resendLink}>Click to Resend</Text>
                                        </Text>
                                    </View>
                                    <View>
                                        <CustomButton
                                            onPress={handleSubmit}
                                            label="Reset Password"
                                            isLoading={isLoading}
                                            buttonTextStyle={styles.buttonText}
                                            viewStyle={styles.button}
                                        />
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

export default ResetPassword;

