import { Formik, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import CustomButton from "../../components/customButton";
import { CustomInputField } from "../../components/customInputField";
import { AndroidbackIcon, IosbackIcon, NameIcon } from "../../constants/svgs";
import { AppDispatch } from "../../redux/store";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Navigation/AuthStack";
import { navigationStrings } from "../../constants/navigationStrings";
import ProgressBar from "../../components/progressBar";
import { clearGuestUserData, setRegisterAsGuest } from "../../redux/slices/registerAsGuest";


interface FormValues {
	name: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required("Please enter your name"),

});

type LogInAsGuestProps = NativeStackScreenProps<AuthStackParamList, 'LogInAsGuest'>;

const LogInAsGuest: React.FC<LogInAsGuestProps> = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch<AppDispatch>()

	const { data: userData, isGuestUser } = useSelector((data: any) => data?.guestUser)


	const initialValues: FormValues = {
		name: userData?.name || "",
	};

	const addName = async (values: FormValues) => {
		setIsLoading(true)
		dispatch(setRegisterAsGuest({name:values.name}))
		
		setIsLoading(false)
		navigation.navigate(navigationStrings.GENDER_SELECTION)
	}



	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values: any) => {
						addName(values)
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
										onPress={() => {dispatch(clearGuestUserData()); navigation.navigate(navigationStrings.WELCOME) }}
										icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
								</View>
								<View style={styles.progressbarview}>
								<ProgressBar percentage={25} detailsText={'Let’s Get Started!'} />
								</View>
								<View style={styles.titletext}>
									<Text style={styles.title}>Let’s start with your name!</Text>
									
								</View>

								<CustomInputField
									fieldName="name"
									value={values.name}
									onChangeText={handleChange}
									onBlur={handleBlur}
									touched={touched.name}
									errors={errors.name}
									placeholder="Enter your name"
									icon={<NameIcon />}
								/>

							</View>


							<View>
								<CustomButton
									onPress={handleSubmit}
									label={"Next"}
									buttonTextStyle={styles.buttonText}
									viewStyle={styles.button}
									isLoading={isLoading}
								/>
							</View>
						</View>
					)}
				</Formik>

			</KeyboardAvoidingView>
		</>
	);
};

export default LogInAsGuest;
