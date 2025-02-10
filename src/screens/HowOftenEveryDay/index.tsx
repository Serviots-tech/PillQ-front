import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { CheckmarkIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import CustomRadioButton from "../../components/customRadioButton";
import { howOftenEveryDayOptions, howOftenOptions } from "../../constants/constantData";
import BackButtonComponent from "../../components/backButton";
import styles from "./style";

const HowOftenEveryDay: React.FC = () => {

	const handleSelect = (option: string) => {
		console.log("🚀 ~ handleSelect ~ option:", option)
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
							<CustomRadioButton options={howOftenEveryDayOptions} selectedOption={null} onSelect={handleSelect}
								label={"How often do you take it?"} selectedIcon={<CheckmarkIcon />}
								error={null} />
						</View>
					</View>


				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default HowOftenEveryDay;
