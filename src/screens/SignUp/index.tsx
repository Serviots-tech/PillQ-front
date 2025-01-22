import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import { postApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import { CustomInputField } from "../../components/customInputField";
import { CustomPasswordInput } from "../../components/customPasswordField";
import { showToast } from "../../components/customToast/ToastManager";
import DividerWithText from "../../components/dividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, EmailIcon, IosbackIcon, NameIcon, PasswordIcon, PhoneIcon } from "../../constants/svgs";
import { storeData } from "../../helpers/asyncStorageHelpers";
import { RootStackParamList } from "../../Navigation/Routes";
import styles from "./style";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter your name"),
    email: Yup.string().email("Invalid email format")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|edu|gov)$/,
            "Email must end with a valid domain like .com, .in"
        )
        .required("Email is required"),
    phone: Yup.string().trim()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Please enter phone number"),
    password: Yup.string()
        .min(8, "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &).").
        max(16, "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &).")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,16}$/,
            "Password must include at least one uppercase letter, one lowercase letter, one number, and be alphanumeric with special characters (@, $, !, %, *, ?, &)."
        )
        .required("Please enter your password"),
    confirmPassword: Yup.string().trim()
        .nullable()
        .oneOf([Yup.ref("password")], "Passwords do not match. Please try again")
        .required("Please confirm your password"),
});

const SignUp: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isLoading, setIsLoading] = useState(false)
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const initialValues: FormValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    };

    const registerUser = async (values: FormValues, resetForm :any) => {

        setIsLoading(true)
        try {
            const { confirmPassword, phone, ...rest } = values
            await storeData('email', values?.email?.toLowerCase())
            await postApi('/auth/register', { ...rest, phoneNumber: phone })
            navigation.navigate(navigationStrings.VERIFY_EMAIL)
        }
        catch (error: any) {
            if (error?.response?.data?.error?.code === 109) {
                showToast({
                    text: `${error?.response?.data?.error?.errorDescription}`,
                    duration: 3000,
                    type: 'error'
                })
            }
        }
        finally {
            setIsLoading(false)
        }
    }


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
    return (<>
        <SafeAreaView></SafeAreaView>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: keyboardVisible ? 250 : 0 }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        await registerUser(values,resetForm)
                        // resetForm();
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
                                    <CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.WELCOME); }} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
                                </View>
                                <View style={styles.titletext}>
                                    <Text style={styles.title}>Create an account</Text>
                                    <Text style={styles.subtitle}>Welcome! Please enter your details</Text>
                                </View>
                                <CustomInputField
                                    fieldName="name"
                                    label="Name"
                                    value={values.name}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.name}
                                    errors={errors.name}
                                    placeholder="Enter your name"
                                    icon={<NameIcon />}
                                // isDisable={true}
                                />

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

                                <CustomInputField
                                    fieldName="phone"
                                    label="Phone"
                                    value={values.phone}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.phone}
                                    errors={errors.phone}
                                    placeholder="Enter your phone number"
                                    icon={<PhoneIcon />}
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
                            </View>
                            <View>
                                <CustomButton onPress={handleSubmit} label={"Sign Up"} buttonTextStyle={styles.buttonText} viewStyle={styles.button} isLoading={isLoading} />
                                <View style={styles.dividertext}>
                                    <DividerWithText color={'#333333'} />
                                </View>
                                <Text style={styles.footer} onPress={() => {
                                    navigation.navigate(navigationStrings.LOGIN);
                                }}>
                                    Already have an account? <Text style={styles.link}>Log in</Text>
                                </Text>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    </>
    );
};

export default SignUp;
