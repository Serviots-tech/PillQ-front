import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";

import CustomImage from "../../components/customImage";
import { imagePaths } from "../../constants/imagePath";

const ComingSoonScreen = () => {

	return (
		<>
			<SafeAreaView />
			<View style={styles.container}>
				<CustomImage imageUrl={imagePaths?.comming_soon} style={styles?.comingSoonImg} />
				<Text style={styles?.comingSoonText}>Coming Soon...</Text>
			</View>
		</>
	);
};

export default ComingSoonScreen;
