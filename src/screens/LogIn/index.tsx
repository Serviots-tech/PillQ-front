import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
// import { getApi } from "../../apis/apis";
import CryptoJS from "crypto-js";
import DeviceInfo from 'react-native-device-info';
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import DividerWithText from "../../components/DividerWithText/DividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { HideEyeIcon, ShowEyeIcon } from "../../constants/svgs";
import { storeData } from "../../helpers/asyncStorageHelpers";
import { RootStackParamList } from "../../Navigation/AuthStack";
import styles from "./style";
import { CustomToast } from "../../components/CustomToast/CutomToast";
import { showToast } from "../../components/CustomToastTimer/ToastManager";



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
        .min(8, "Password must be at least 8 characters")
        .max(16, "Password must be at most 16 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,16}$/,
            "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with optional special characters (@, $, !, %, *, ?, &)."
        )
        .required("Password is required"),
});

type LogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogIn: React.FC<LogInProps> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [deviceId, setDeviceId] = useState("");

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    const loginUser = async (values: FormValues) => {
        console.log("🚀 ~ loginUser ~ values:", values)
        setIsLoading(true)
        try {
            const res = await postApi('/auth/login', { ...values, deviceId })
            console.log("🚀 ~ loginUser ~ res:", res?.data)
            // navigation.navigate(navigationStrings.VERIFY_EMAIL)
            storeData("accessToken", res?.data?.accessToken)
        }
        catch (error: any) {
            // console.log("🚀 ~ loginUser ~ error:", error)
            // console.log("Axios Error:", error.message); 
            if (error?.response?.data?.error?.code === 104) {
                console.log("Invalid Credentials")
            }
            if (error?.response?.data?.error?.code === 103) {
                console.log("User not verified")
                navigation?.navigate(navigationStrings?.VERIFY_EMAIL)
            }
            if (error?.response?.data?.error?.code === 105) {
                console.log("Buy subscription to move forward.")
            }
        }
        finally {
            setIsLoading(false)
            showToast({
                text: 'Success',
                duration: 12000,
                type: 'info'
            })
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
                                    <CustomButton label={"back-icon"} onPress={() => { navigation.goBack(); }} isIcon={true} />
                                </View>
                                <View style={styles.titletext}>
                                    <Text style={styles.title}>Log in to your account</Text>
                                    <Text style={styles.subtitle}>Welcome! Please enter your details</Text>
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.fieldTitle}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter your email"
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        keyboardType="email-address"
                                    />
                                    {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.fieldTitle}>Password</Text>
                                    <View style={styles.passwordContainer}>
                                        <TextInput
                                            style={styles.inputPassword}
                                            placeholder="Enter your password"
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            value={values.password}
                                            secureTextEntry={!isPasswordVisible}  // Toggling secure text entry
                                        />
                                        <TouchableOpacity
                                            style={styles.eyeIcon}
                                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}  // Toggle password visibility
                                        >
                                            {isPasswordVisible ? <ShowEyeIcon /> : <HideEyeIcon />}

                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.error}>{errors.password}</Text>
                                    )}
                                </View>
                            </View>


                            {/* Button positioned at the bottom of the screen */}
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
                                    Don’t have an account?
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
