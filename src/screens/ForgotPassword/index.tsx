import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AuthStack";
import styles from "./style"; // Ensure the styles match the provided UI
import CustomButton from "../../components/customButton";
import { navigationStrings } from "../../constants/navigationStrings";
import { BackIcon, EmailIcon } from "../../constants/svgs";
import { CustomInputField } from "../../components/customInputField";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";
import { postApi } from "../../apis/apis";
import { storeData } from "../../helpers/asyncStorageHelpers";

interface FormValues {
    email: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
});
const ForgetPassword: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isLoading, setIsLoading] = useState(false)

    const initialValues: FormValues = {
        email: "",
    };


    const handleRequestOtp = async (values: any) => {
        try {
            setIsLoading(true)
            await storeData('email', values?.email?.toLowerCase())
            await postApi('/auth/forgot-password', { ...values })
            navigation.navigate(navigationStrings.RESET_PASSWORD);

        } catch (error) {
            console.error("Error requesting OTP:", error);
        }
        finally {
            setIsLoading(false)
        }
    };

    return (
        <>
            <SafeAreaView />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        await handleRequestOtp(values)
                        resetForm();
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
                                    <CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.goBack(); }} icon={<BackIcon />} />
                                </View>
                                <Text style={styles.title}>Forget password?</Text>
                                <Text style={styles.subtitle}>
                                    Enter your registered email address below.
                                </Text>
                                <Text style={styles.subtitle}>We’ll send you a One-Time Password (OTP) to verify your identity.</Text>
                                <CustomInputField
                                    fieldName="email"
                                    label="Enter your email address"
                                    value={values.email}
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    touched={touched.email}
                                    errors={errors.email}
                                    placeholder="Enter your email"
                                    icon={<EmailIcon />}
                                />
                            </View>
                            <CustomButton
                                onPress={handleSubmit}
                                label={"Request OTP"}
                                buttonTextStyle={styles.buttonText}
                                viewStyle={styles.button}
                                isLoading={isLoading}
                            />
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </>
    );
};

export default ForgetPassword;
