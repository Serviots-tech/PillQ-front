import dayjs from 'dayjs';
import 'dayjs/locale/en';
import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';

const theme = { mainColor: '#CCF6E4', activeTextColor: '#00864E' };

export default function CustomDatePicker() {
	const [date, setDate] = useState<DateType | undefined>(dayjs());

	const onChange = (params: any) => {
		setDate(params.date);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.body}>
				<View style={styles.datePickerContainer}>
					<DateTimePicker
						mode="single"
						date={date}
						locale="en"
						timePicker={false}
						onChange={onChange}
						headerButtonColor={theme.mainColor}
						selectedItemColor={theme.mainColor}
						selectedTextStyle={{
							fontWeight: 'bold',
							color: theme.activeTextColor,
						}}
						todayContainerStyle={{
							borderWidth: 1,
						}}
					/>
				</View>
				<View style={styles.footer}>
					<Text style={styles.selectedDateText}>
						{date
							? dayjs(date).locale('en').format('MMMM DD, YYYY')
							: 'Select a date'}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	body: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	datePickerContainer: {
		width: 330,
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 15,
		shadowRadius: 20,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 0 },
	},
	footer: {
		marginTop: 20,
		alignItems: 'center',
	},
	selectedDateText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
});
