import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import styles from './style';
import { CalenderIcon } from '../../constants/svgs';

interface CustomDateInputProps {
	label: string;
	date: DateType | undefined;
	setDate: (date: DateType | undefined) => void;
	errormsg: string |null
}

const CustomDateInput = ({ label, date, setDate, errormsg }: CustomDateInputProps) => {
	const [isPickerVisible, setPickerVisible] = useState(false);

	const handleDateChange = (params: { date: DateType | undefined }) => {
		setDate(params.date);
		setPickerVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TouchableOpacity onPress={() => setPickerVisible(true)} style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					editable={false}
					value={date ? dayjs(date).format('DD/MM/YYYY') : 'DD/MM/YYYY'}
				/>
				<Text style={styles.icon}>
					<CalenderIcon />
				</Text>
			</TouchableOpacity>
			{errormsg && <Text style={styles.errormsg}>{errormsg}</Text>}

			{/* Modal for Date Picker */}
			<Modal visible={isPickerVisible} transparent={true} animationType="fade">
				<View style={styles.modalBackground}>
					<View style={[styles.modalContainer, { justifyContent: 'flex-start' }]}>
						<DateTimePicker
							mode="single"
							date={date}
							locale="en"
							timePicker={false}
							onChange={handleDateChange}
							headerButtonColor="#00A8A8"
							selectedItemColor="#00A8A8"
							selectedTextStyle={{
								fontWeight: 'bold',
								color: '#FFFF',
							}}
							todayContainerStyle={{
								borderWidth: 1,
								borderColor: '#00A8A8',
								shadowColor: '#00A8A8',
								borderRadius: 50,
								width: 40,
								height: 40,
							}}
						/>
						<TouchableOpacity
							onPress={() => setPickerVisible(false)}
							style={[styles.closeButton]}
						>
							<Text style={styles.closeButtonText}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default CustomDateInput;
