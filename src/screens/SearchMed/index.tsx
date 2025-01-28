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
import axios from "axios";
import { useDebouncedValue } from "../../helpers/debounce";

const SearchMed: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const inputRef = useRef<TextInput>(null);
	const [text, setText] = useState<string>("")
	const [medicine, setMedicine] = useState<string[]>([])
	const debouncedSearchTerm = useDebouncedValue(text, 800);

	// Handle the search input change
	const handleSearch = (inputText: string) => {
		setText(inputText); // Simply set the text on user input
	};

	// Call API when debounced search term changes
	useEffect(() => {
		if (!debouncedSearchTerm.trim()) return; // Avoid API call for empty strings
		const apicaller = async () => {
			try {
				const result = await axios.get(`https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${debouncedSearchTerm}&maxEntries=10`);
				const names = result?.data?.approximateGroup?.candidate?.map((item: any) => item.name);
				const filteredMedicine = names?.filter((name: string) => name !== undefined);
				const uniqueMedicine = Array.from(
					new Set(filteredMedicine?.map((name: string) => name.toLowerCase()))
				).map((uniqueName) =>
					// Return the original case for the first occurrence of each unique name
					filteredMedicine.find((name: string) => name.toLowerCase() === uniqueName)
				);
				setMedicine(uniqueMedicine || []);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		apicaller();
	}, [debouncedSearchTerm]);

	// Focus the input field when the component mounts
	useEffect(() => {
		const timeout = setTimeout(() => inputRef.current?.focus(), 100);
		return () => clearTimeout(timeout); // Cleanup timeout on unmount
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
							onPress={() => { navigation.navigate(navigationStrings.HOME); }}
							icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
					</View>
					<ProgressBar percentage={15} detailsText={' '} />
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
