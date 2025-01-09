import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from "react-native";
import * as Yup from "yup";
import CryptoJS from "crypto-js";
import DeviceInfo from 'react-native-device-info';
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import { CustomInputField } from "../../components/customInputField";
import { CustomPasswordInput } from "../../components/customPasswordField";
import { showToast } from "../../components/customToastTimer/ToastManager";
import DividerWithText from "../../components/dividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { BackIcon, EmailIcon, PasswordIcon } from "../../constants/svgs";
import { storeData } from "../../helpers/asyncStorageHelpers";
import { RootStackParamList } from "../../Navigation/AuthStack";
import styles from "./style";



interface FormValues {
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format")
    .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|edu|gov)$/,
        "Email must end with a valid domain like .com, .in"
    )
    .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &).")
        .max(16, "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &).")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,16}$/,
            "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &)."
        )
        .required("Please enter your password"),


});

type LogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogIn: React.FC<LogInProps> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [deviceId, setDeviceId] = useState("");

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    const loginUser = async (values: FormValues) => {
        setIsLoading(true)
        try {
            const res = await postApi('/auth/login', { ...values, deviceId })
            showToast({
                text: `${res?.data?.message}`,
                duration: 2000,
                type: 'success'
            })
            storeData("accessToken", res?.data?.accessToken)
            storeData("refreshToken", res?.data?.refreshToken)

        }
        catch (error: any) {
            if (error?.response?.data?.error?.code === 103) {
                console.log("User not verified")
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
                    type: 'info'
                })
                navigation?.navigate(navigationStrings?.VERIFY_EMAIL)

            }
            if (error?.response?.data?.error?.code === 104) {
                console.log("Invalid Credentials")
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
                    type: 'error'
                })
            }
            if (error?.response?.data?.error?.code === 105) {
                console.log("Buy subscription to move forward.")
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
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
                        loginUser(values)
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
                                    <CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.WELCOME); }} icon={<BackIcon />} />
                                </View>
                                <View style={styles.titletext}>
                                    <Text style={styles.title}>Log in to your account</Text>
                                    <Text style={styles.subtitle}>Welcome! Please enter your details</Text>
                                </View>

                                <CustomInputField
                                    fieldName="email"
                                    label="Email"
                                    value={values.email}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.email}
                                    errors={errors.email}
                                    placeholder="Enter your email"
                                    icon={<EmailIcon />}
                                />

                                <CustomPasswordInput
                                    fieldName="password"
                                    label="Password"
                                    value={values.password}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.password}
                                    errors={errors.password}
                                    placeholder="Enter your password"
                                    icon={<PasswordIcon />}
                                />
                            </View>


                            <View>
                                <CustomButton
                                    onPress={handleSubmit}
                                    label={"Log In"}
                                    buttonTextStyle={styles.buttonText}
                                    viewStyle={styles.button}
                                    isLoading={isLoading}
                                />
                                <View style={{ marginVertical: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <DividerWithText color={'#333333'} />
                                </View>
                                <Text style={styles.footer}>
                                    Don’t have an account?{' '}
                                    <Text
                                        style={styles.link}
                                        onPress={() => {
                                            navigation.navigate(navigationStrings.SIGN_UP);
                                        }}>
                                        Sign up
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </>
    );
};

export default LogIn;
