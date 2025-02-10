import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { CheckmarkIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import CustomRadioButton from "../../components/customRadioButton";
import { howOftenOptions } from "../../constants/constantData";
import BackButtonComponent from "../../components/backButton";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { navigationStrings } from "../../constants/navigationStrings";

const HowOften: React.FC = () => {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const handleSelect = (option: string) => {
		navigation.navigate(navigationStrings.HOW_OFTEN_EVERY_DAY)
	}
	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<BackButtonComponent centerText="Med" />
						<View style={styles.progressbarview}>
							<ProgressBar percentage={30} detailsText={"Getting to Know You"} />
						</View>
						<View>
							<CustomRadioButton options={howOftenOptions} selectedOption={null} onSelect={handleSelect}
								label={"How often do you take it?"} selectedIcon={<CheckmarkIcon />}
								error={null} />
						</View>
					</View>


				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default HowOften;
