import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CryptoJS from "crypto-js";
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import { CustomInputField } from "../../components/customInputField";
import { CustomPasswordInput } from "../../components/customPasswordField";
import { showToast } from "../../components/customToast/ToastManager";
import DividerWithText from "../../components/dividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, EmailIcon, IosbackIcon, PasswordIcon } from "../../constants/svgs";
import { storeData } from "../../helpers/asyncStorageHelpers";
import { getValueFromAcessToken } from "../../helpers/jwtHelpers";
import { RootStackParamList } from "../../Navigation/Routes";
import { getUserProfile } from "../../redux/actions/userAction";
import { setLoginStatus } from "../../redux/slices/isLoggedIn";
import { AppDispatch } from "../../redux/store";
import styles from "./style";
import { setGuestUser } from "../../redux/slices/registerAsGuest";
import { useAuth } from "../../components/authContext";



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
    const dispatch = useDispatch<AppDispatch>()
    const { login } = useAuth();


    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    const loginUser = async (values: FormValues) => {
        setIsLoading(true)
        try {
            const res = await postApi('/auth/login', { ...values, deviceId })

            const getDeviceId = getValueFromAcessToken(res?.data?.accessToken)
            storeData("accessToken", res?.data?.accessToken)
            storeData("deviceId", getDeviceId)

            // // fetch profile 
            // dispatch(getUserProfile())

            // // changes in isloggedIn functionz 
            // dispatch(setLoginStatus(true))

            await dispatch(getUserProfile())
                .then(() => {
                    if (res?.data?.firstLogin) {
                        dispatch(setGuestUser(false))
                        navigation.navigate(navigationStrings.GENDER_SELECTION)
                    }
                    else {
                        login()
                        // dispatch(setLoginStatus(true));
                    }
                })
                .catch((error) => {
                    console.log("🚀 ~ loginUser ~ error:", error)
                    navigation.navigate(navigationStrings.WELCOME)
                });
        }
        catch (error: any) {
            if (error?.response?.data?.error?.code === 103) {
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
                    type: 'info'
                })
                await storeData('email', values?.email?.toLowerCase())
                navigation?.navigate(navigationStrings?.VERIFY_EMAIL)

            }
            if (error?.response?.data?.error?.code === 104) {
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
                    type: 'error'
                })
            }
            if (error?.response?.data?.error?.code === 105) {
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
                setDeviceId(hashedMessage)
            } catch (error) {
                console.log("🚀 ~ fetchDeviceId ~ error:", error)
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
                                    <CustomButton
                                        label={"Back"}
                                        buttonTextStyle={styles.backBtn}
                                        onPress={() => { navigation.navigate(navigationStrings.WELCOME); }}
                                        icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
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
                                <Text
                                    style={styles.forgotPassword}
                                    onPress={() => navigation.navigate(navigationStrings.FORGOT_PASSWORD)}>
                                    Forgot Password?
                                </Text>
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
