import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik, FormikProps } from "formik";
import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
// import { getApi } from "../../apis/apis";
import CustomButton from "../../components/customButton";
import DividerWithText from "../../components/DividerWithText/DividerWithText";
import { navigationStrings } from "../../constants/navigationStrings";
import { RootStackParamList } from "../../Navigation/AuthStack";
import styles from "./style";

interface FormValues {
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),

});

type LogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogIn: React.FC<LogInProps> = ({ navigation }) => {

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    // const registerUser = async (values: FormValues) => {
    //     const user = await getApi('/')
    // }
    return (
        <>
            <SafeAreaView />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values: any) => {
                        // registerUser(values)
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
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter your password"
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        secureTextEntry
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={styles.error}>{errors.password}</Text>
                                    )}
                                </View>
                            </View>


                            {/* Button positioned at the bottom of the screen */}
                            <View>
                                <CustomButton onPress={handleSubmit} label={"Log In"} buttonTextStyle={styles.buttonText} viewStyle={styles.button} />
                                <View style={{ marginVertical: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <DividerWithText color={'#333333'} />
                                </View>
                                <Text style={styles.footer}>
                                    Don’t have an account? <Text style={styles.link}
                                        onPress={() => {
                                            navigation.navigate(navigationStrings.SIGN_UP);
                                        }}>Sign up</Text>
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
