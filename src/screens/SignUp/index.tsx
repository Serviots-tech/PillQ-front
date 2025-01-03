import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import CustomButton from "../../components/customButton";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          console.log(values);
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
                <CustomButton label={"arrow-back"} onPress={undefined} isIcon={true}/>
               <View style={styles.titletext}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>Welcome! Please enter your details</Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldTitle}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
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
              <Text style={styles.fieldTitle}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
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

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldTitle}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Re-enter your password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
            </View>
            </View>

            {/* Button positioned at the bottom of the screen */}
            <View>
            <CustomButton onPress={handleSubmit} label={"Verify Email"} buttonTextStyle={styles.buttonText} viewStyle={styles.button}/>
            <Text style={styles.footer}>
              Already have an account? <Text style={styles.link}>Log in</Text>
            </Text>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
