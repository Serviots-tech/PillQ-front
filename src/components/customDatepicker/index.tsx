import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function CustomDatepicker() {
  const [date, setDate] = useState(dayjs());

  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(dayjs(params.date))}
        headerButtonColor='#44D688'
        //themeVariant="dark" // Example to apply a dark theme if needed
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width:'90%',
    marginTop:'10%',
    backgroundColor: '#F5FCFF',
  },
});