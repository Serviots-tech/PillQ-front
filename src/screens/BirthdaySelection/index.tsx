import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AuthStack";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import styles from "./style";
import CustomDateInput from "../../components/customDatepicker";
import { DateType } from "react-native-ui-datepicker";

const BirthdaySelection: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitClick, setIsSubmitClick] = useState<boolean>(false)
	const [birthdate, setBirthday] = useState<DateType | undefined>()


	const handleSubmit = () => {
		setIsSubmitClick(true)
	}

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<View style={styles.backicon}>
							<CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.WELCOME); }} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
						</View>
						<View style={styles.progressbarview}>
							<ProgressBar percentage={75} detailsText={"Just a Few More Details"} />
						</View>
						<View>
							<CustomDateInput label="Let us know your date of birth."
								date={birthdate}
								setDate={setBirthday}
								errormsg={isSubmitClick && !birthdate ? "Please select a birthdate to continue" : null}
							/>
						</View>
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
			</KeyboardAvoidingView>
		</>
	);
};

export default BirthdaySelection;
