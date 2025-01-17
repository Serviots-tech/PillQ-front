import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import CustomButton from "../../components/customButton";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AuthStack";
import CustomRadioButton from "../../components/customRadioButton";
import { genderOptions } from "../../constants/constantData";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, CheckmarkIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";



const GenderSelection: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedGender, setSelectedGender] = useState<string | null>(null);
	const [isSubmitClick,setIsSubmitClick]=useState<boolean>(false)


	const handleSubmit = () => {
		console.log("object")
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
						<ProgressBar percentage={25} detailsText={"Getting to Know You"}/>
						</View>
						<View>
						<CustomRadioButton options={genderOptions} selectedOption={selectedGender} onSelect={setSelectedGender}
								label={"How do you prefer to identify yourself?"} selectedIcon={<CheckmarkIcon />}
							error={isSubmitClick && selectedGender === null ? "Please select a gender to continue" : null}/>
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

export default GenderSelection;
