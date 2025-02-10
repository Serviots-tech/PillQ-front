import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/Routes";
import styles from "./style";
import CustomDropdown from "../../components/customDropdown";
import { navigationStrings } from "../../constants/navigationStrings";
import ProgressBar from "../../components/progressBar";
import { useDebouncedValue } from "../../helpers/debounce";
import { MedApi } from "../../apis/apis";
import BackButtonComponent from "../../components/backButton";

const SearchMed: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const inputRef = useRef<TextInput>(null);
	const [text, setText] = useState<string>("")
	const [medicine, setMedicine] = useState<string[]>([])
	const debouncedSearchTerm = useDebouncedValue(text, 800);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSearch = (inputText: string) => {
		setText(inputText);
	};


	const handleSelect = (inputText: string) => {

		navigation.navigate(navigationStrings.MED_FORM)
	};


	useEffect(() => {
		if (!debouncedSearchTerm.trim()) return;
		const apicaller = async () => {
			setIsLoading(true)
			try {
				if (text == '') {
					setMedicine([])
				}
				else {
					const result = await MedApi(`/approximateTerm.json?term=${debouncedSearchTerm}&maxEntries=100`)

					const names = result?.data?.approximateGroup?.candidate?.map((item: any) => item.name);

					const filteredMedicine = names?.filter((name: string) => name !== undefined);

					if (!filteredMedicine || filteredMedicine === undefined) {
						setMedicine([`${debouncedSearchTerm}`])
					} else {
						const uniqueMedicine = Array.from(
							new Set(filteredMedicine?.map((name: string) => name.toLowerCase()))
						).map((uniqueName) =>
							// Return the original case for the first occurrence of each unique name
							filteredMedicine.find((name: string) => name.toLowerCase() === uniqueName)
						);
						setMedicine(uniqueMedicine || []);
					}
				}
			} catch (error) {
				console.error("Error fetching data:", JSON.stringify(error));
			}
			finally {
				setIsLoading(false)
			}
		};
		apicaller();
	}, [debouncedSearchTerm]);


	// useEffect(() => {
	// 	const timeout = setTimeout(() => inputRef.current?.focus(), 100);
	// 	return () => clearTimeout(timeout); // Cleanup timeout on unmount
	// }, []);

	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					{/* <View style={styles.backicon}>
						<CustomButton
							label={"Back"}
							buttonTextStyle={styles.backBtn}
							onPress={() => { navigation.navigate(navigationStrings.HOME); }}
							icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />} />
					</View> */}
					<View>
						<BackButtonComponent centerText="" />
						<View style={styles.progressbarview}>
							{/* <ProgressBar percentage={30} detailsText={"Getting to Know You"} /> */}
							<ProgressBar percentage={15} detailsText={' '} />
						</View>
						<CustomDropdown
							value={text}
							onChangeText={handleSearch}
							onDropdownChange={handleSelect}
							dropdownList={medicine}
							placeholder="Search your medication name"
							title="What med would you like to add?"
							footerText="Refine your search for more results"
							inputRef={inputRef}
							isLoading={isLoading}
							setText={setText}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default SearchMed;
