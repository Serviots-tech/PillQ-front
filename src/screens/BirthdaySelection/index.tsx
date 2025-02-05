import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";
import styles from "./style";
import CustomDateInput from "../../components/customDatepicker";
import { DateType } from "react-native-ui-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { setRegisterAsGuest } from "../../redux/slices/registerAsGuest";
import { AppDispatch } from "../../redux/store";
import dayjs from "dayjs";

const BirthdaySelection: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitClick, setIsSubmitClick] = useState<boolean>(false)
	const [birthdate, setBirthday] = useState<DateType | undefined>()
	const [isBirthdateSet, setIsBirthdateSet] = useState<boolean>(false);


const { data: userData, isGuestUser } = useSelector((data: any) => data?.guestUser)

	const dispatch = useDispatch<AppDispatch>()


	const handleSubmit = async () => {
		setIsSubmitClick(true)
		setIsLoading(true)
		if (birthdate) {
			const isoBirthdate = dayjs.isDayjs(birthdate)
				? birthdate.toISOString()
				: new Date(birthdate).toISOString();
			dispatch(setRegisterAsGuest({ birthdate: isoBirthdate }))

			navigation.navigate(navigationStrings.APP_USAGE_SELECTION)
		}
		setIsLoading(false)
	}

	useEffect(() => {
		if (userData?.birthdate && !isBirthdateSet) {
			setBirthday(userData.birthdate);
			setIsBirthdateSet(true); 
		}
	}, [userData, isBirthdateSet]);

	useEffect(() => {
		if (birthdate) {
			const isoBirthdate = dayjs.isDayjs(birthdate)
				? birthdate.toISOString()
				: new Date(birthdate).toISOString();
			dispatch(setRegisterAsGuest({ birthdate: isoBirthdate }));
		}
	}, [birthdate]);

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<View style={styles.backicon}>
							<CustomButton label={""} buttonTextStyle={styles.backBtn} onPress={() => { navigation.navigate(navigationStrings.GENDER_SELECTION); }} icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
						</View>
						<View style={styles.progressbarview}>
							<ProgressBar percentage={isGuestUser ? 75 : 60} detailsText={"Just a Few More Details"} />
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
	