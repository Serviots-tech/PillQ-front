import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
// import { getApi } from "../../apis/apis";
import CryptoJS from "crypto-js";
import DeviceInfo from 'react-native-device-info';
import CustomButton from "../../components/customButton";
import DividerWithText from "../../components/DividerWithText/DividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { RootStackParamList } from "../../Navigation/AuthStack";
import styles from "./style";
import { postApi } from "../../apis/apis";
import { CustomInputField } from "../../components/customInputField";
import { CustomPasswordInput } from "../../components/customPasswordField";




interface FormValues {
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
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
            await postApi('/auth/login', { ...values, deviceId })
            // navigation.navigate(navigationStrings.VERIFY_EMAIL)
        }
        catch (error: any) {
            console.log("Axios Error:", error.message); // Log error message
            if (error.response) {
                console.log("Response Data:", error.response.data); // Log response from server
            } else if (error.request) {
                console.log("Request Details:", error.request); // Log request sent
            } else {
                console.log("Error Details:", error); // Other errors
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
                                    <CustomButton label={"back-icon"} onPress={() => { navigation.navigate(navigationStrings.WELCOME); }} isIcon={true} />
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
                                />
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
