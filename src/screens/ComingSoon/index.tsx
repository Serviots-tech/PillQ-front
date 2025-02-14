import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import styles from "./style";

import { imagePaths } from "../../constants/imagePath";
import CustomImage from "../../components/customImage";

const ComingSoonScreen = () => {
	
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
			{/* <CustomImage imageUrl={imagePaths?.docAnimatedImg} style={styles?.docImg}/> */}
				
			</View>
		</SafeAreaView>
	);
};

export default ComingSoonScreen;
