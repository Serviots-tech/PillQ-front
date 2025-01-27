import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import styles from "./style";

import CustomDropdown from "../../components/customDropdown";
import CustomButton from "../../components/customButton";
import { navigationStrings } from "../../constants/navigationStrings";
import { AndroidbackIcon, IosbackIcon } from "../../constants/svgs";
import ProgressBar from "../../components/progressBar";

const SearchMed: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const inputRef = useRef<TextInput>(null);
	const [text, setText] = useState<string>("")
	const [medicine, setMedicine] = useState<string[]>([])
	const data = [
		'Car',
		'Carac',
		'Carafate',
		'Carbatrol',
		'Cardene IV',
		'Cardizem',
		'Cardizem CD',
		'Cardura',
	]

	const handleSearch = (text: string) => {
		setText(text);
		const results = data?.filter((item) =>
			item?.toLowerCase()?.startsWith(text?.toLowerCase())
		);
		setMedicine(results);
	};
	useEffect(() => {
		// Focus the input field when the component mounts
		const timeout = setTimeout(() => {
			inputRef.current?.focus(); // Delay focus slightly for iOS to ensure the component is fully mounted
		}, 100);

		return () => clearTimeout(timeout); // Cleanup timeout
	}, []);

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>

					<View style={styles.backicon}>
						<CustomButton
							label={"Back"}
							buttonTextStyle={styles.backBtn}
							onPress={() => { navigation.navigate(navigationStrings.WELCOME); }}
							icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
					</View>
					<ProgressBar percentage={15} detailsText={' '}/>
					<CustomDropdown
						value={text}
						onChange={handleSearch}
						dropdownList={medicine}
						placeholder="Search your medication name"
						title="What med would you like to add?"
						footerText="Refine your search for more results"
						inputRef={inputRef}
					/>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default SearchMed;
