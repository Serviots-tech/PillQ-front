import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import styles from "./style";
import CustomButton from "../../components/customButton";
import { useAuth } from "../../components/authContext";
import { clearGuestUserData } from "../../redux/slices/registerAsGuest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import { useNavigation } from "@react-navigation/native";
import { navigationStrings } from "../../constants/navigationStrings";
import { imagePaths } from "../../constants/imagePath";
import CustomImage from "../../components/customImage";

const OnboardSuccessScreen = () => {
	const { login } = useAuth();
	const dispatch = useDispatch<AppDispatch>()
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	
	const { data: userData, isGuestUser } = useSelector((data: any) => data?.guestUser)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				{/* <View style={styles.imagePlaceholder} /> */}
				<CustomImage imageUrl={imagePaths?.docAnimatedImg} style={styles?.docImg}/>
				<Text style={styles.title}>Welcome aboard, {userData?.name}</Text>
				<Text style={styles.subtitle}>
					You've completed your *APP* profile. Now, let's add your medication to create your very first reminder.
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CustomButton
					label="Add my med"
					onPress={() => { dispatch(clearGuestUserData()); navigation.navigate(navigationStrings.SEARCH_MED) }}
					viewStyle={styles.primaryButton}
					buttonTextStyle={styles.primaryButtonText}
				/>
				<TouchableOpacity style={styles.secondaryButton} onPress={() => { dispatch(clearGuestUserData()); login() }}>
					<Text style={styles.secondaryButtonText}>Skip</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default OnboardSuccessScreen;
