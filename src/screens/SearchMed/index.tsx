import React, { useEffect, useRef, useState } from "react";
import { Button, KeyboardAvoidingView, Platform, SafeAreaView, TextInput, View } from "react-native";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setAddMedicine } from "../../redux/slices/addMedicine";
import { useAuth } from "../../components/authContext";



const SearchMed: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const inputRef = useRef<TextInput>(null);
	const [text, setText] = useState<string>("")
	const [medicine, setMedicine] = useState<string[]>([])
	const debouncedSearchTerm = useDebouncedValue(text, 800);
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	const { setIsLoginAndAddMedFalse } = useAuth();

	useEffect(()=>{
		setIsLoginAndAddMedFalse()
	},[])
	

	const handleSearch = (inputText: string) => {
		setText(inputText);
	};


	const handleSelect = (selectedMed: string) => {

		dispatch(setAddMedicine({ name: selectedMed }))

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


	return (
		<>
			<SafeAreaView />
			<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
				<View style={styles.container}>
					<View>
						<BackButtonComponent centerText="" targetScreen={navigationStrings?.HOME}/>
						<View style={styles.progressbarview}>
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
