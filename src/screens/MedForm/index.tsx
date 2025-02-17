import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { CheckmarkIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import styles from "./style";
import CustomRadioButton from "../../components/customRadioButton";
import { medFormOptions } from "../../constants/constantData";
import BackButtonComponent from "../../components/backButton";
import { navigationStrings } from "../../constants/navigationStrings";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAddMedicine } from "../../redux/slices/addMedicine";

const MedForm: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const dispatch = useDispatch<AppDispatch>()

	const { data: addMedData } = useSelector((data: any) => data?.addMedicine)

	const handleSelect =  (option: string) => {
		dispatch(setAddMedicine({ medicineForm: option }))
		navigation.navigate(navigationStrings.HOW_OFTEN)
	}
	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<BackButtonComponent centerText={addMedData?.name?.toLowerCase().length > 10 ? addMedData?.name?.toLowerCase().substring(0, 12) + '...' : addMedData?.name?.toLowerCase()} />
						<View style={styles.progressbarview}>
							<ProgressBar percentage={30} detailsText={"Getting to Know You"} />
						</View>
						<View>
							<CustomRadioButton options={medFormOptions} selectedOption={null} onSelect={handleSelect}
								label={"What form is the med?"} selectedIcon={<CheckmarkIcon />}
								error={null} />
						</View>
					</View>


				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default MedForm;
