import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import CustomButton from "../../components/customButton";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import CustomRadioButton from "../../components/customRadioButton";
import { genderOptions } from "../../constants/constantData";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, CheckmarkIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setRegisterAsGuest } from "../../redux/slices/registerAsGuest";
import { useAuth } from "../../components/authContext";



const GenderSelection: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedGender, setSelectedGender] = useState<string | null>(null);
	const [isSubmitClick, setIsSubmitClick] = useState<boolean>(false)

	const dispatch = useDispatch<AppDispatch>()

	const { setAdditionalDataPendingFalse }= useAuth();

	const { data: userData, isGuestUser } = useSelector((data: any) => data?.guestUser)

	const handleSubmit = async () => {
		setIsSubmitClick(true)
		setIsLoading(true)
		if (selectedGender) {
			dispatch(setRegisterAsGuest({ gender: selectedGender }))

			navigation.navigate(navigationStrings.BIRTHDAY_SELECTION)
		}
		setIsLoading(false)
	}

	useEffect(() => {
		setAdditionalDataPendingFalse()
		if (userData?.gender) {
			setSelectedGender(userData?.gender)
		}
	}, [])

	useEffect(()=>{
		dispatch(setRegisterAsGuest({ gender: selectedGender }))
	}, [selectedGender])


	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						{isGuestUser && <View style={styles.backicon}>
							<CustomButton label={"Back"} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.LOGIN_AS_GUEST); }} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
						</View>}
						<View style={styles.progressbarview}>
							<ProgressBar percentage={isGuestUser ? 50 : 30} detailsText={"Getting to Know You"} />
						</View>
						<View>
							<CustomRadioButton options={genderOptions} selectedOption={selectedGender} onSelect={setSelectedGender}
								label={"How do you prefer to identify yourself?"} selectedIcon={<CheckmarkIcon />}
								error={isSubmitClick && selectedGender === null ? "Please select a gender to continue" : null} />
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
