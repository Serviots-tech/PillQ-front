import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import CustomButton from "../../components/customButton";
import { useAuth } from "../../components/authContext";
import {  useSelector } from "react-redux";
import { imagePaths } from "../../constants/imagePath";
import CustomImage from "../../components/customImage";

const OnboardSuccessScreen = () => {
	const { login, handleLoginAndAddMed } = useAuth();
	
	const { data: userData } = useSelector((data: any) => data?.guestUser)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				{/* <View style={styles.imagePlaceholder} /> */}
				<CustomImage imageUrl={imagePaths?.docAnimatedImg} style={styles?.docImg}/>
				<Text style={styles.title}>Welcome aboard, {userData?.name}</Text>
				<Text style={styles.subtitle}>
					Your PillQ profile is ready!
				</Text>
				<Text style={styles.subtitle}>
					Add your medication to create your reminder.
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<CustomButton
					label="Add my med"
					onPress={async () => {  handleLoginAndAddMed(); }}
					viewStyle={styles.primaryButton}
					buttonTextStyle={styles.primaryButtonText}
				/>
				<TouchableOpacity style={styles.secondaryButton} onPress={async () => { login() }}>
					<Text style={styles.secondaryButtonText}>Skip</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default OnboardSuccessScreen;
