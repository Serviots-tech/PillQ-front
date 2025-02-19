import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment, { Moment } from 'moment';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';
import { imagePaths } from '../../constants/imagePath';
import { DoubleArrowIcon } from '../../constants/svgs';

const CustomCalendar = ({
    getDateFromCalender,
    dateFromCalender,
}: {
    getDateFromCalender: (date: Moment) => void;
    dateFromCalender:Moment;
}) => {
    const [selectedDate, setSelectedDate] = useState<Moment>(dateFromCalender); // Initialize with prop value
    const minDate = moment().subtract(30, 'days'); 
    const maxDate = moment().add(30, 'days');


  // Sync selectedDate with parent’s state change
  useEffect(() => {
    if (!selectedDate.isSame(dateFromCalender, 'day')) {
      setSelectedDate(dateFromCalender); // Update only if the date is different
    }
  }, [dateFromCalender]);
    
    const goToToday = () => {
        const today = moment();
        setSelectedDate(today);
        getDateFromCalender(today); 
    }

    useEffect(() => {
        getDateFromCalender(selectedDate); // Notify the parent whenever the selected date changes
    }, [selectedDate]);


    return (
        <View style={styles.container}>
            <View style={styles.goTodayView}>
                <Text style={styles.selectedDateText}>
                    {selectedDate.isSame(moment(), 'day') ? 'Today, ' : ''}
                    {selectedDate.format('DD MMMM')}
                </Text>
                <TouchableOpacity
                    style={styles.todayButton}
                    onPress={goToToday}
                >
                    <Text style={styles.todayButtonText}><DoubleArrowIcon /> Today</Text>
                </TouchableOpacity>
            </View>

            <CalendarStrip
                scrollable
                style={{ height: verticalScale(70), paddingTop: 2, paddingBottom: 2 }}
                calendarHeaderStyle={{ width: 0, height: 0 }}
                startingDate={moment()}
                minDate={minDate}
                maxDate={maxDate}
                iconLeft={imagePaths.rigthArrow}
                iconRight={imagePaths.leftArrow}
                iconLeftStyle={{ height: 8 }}
                iconRightStyle={{ height: 8 }}
                iconContainer={{ width: 8, height: 5, }}
                selectedDate={selectedDate}
                dayContainerStyle={{ height: verticalScale(65) }}
                dayComponentHeight={verticalScale(70)}
                onDateSelected={date => {
                    const momentDate = moment.isMoment(date) ? date : moment(date);
                    setSelectedDate(momentDate);
                }}
                
                dayComponent={({ date }) => {
                    const momentDate = moment.isMoment(date)
                        ? date
                        : moment(date as object);
                    const isSelected = momentDate.isSame(selectedDate, 'day');
                    const isDisabled = !momentDate.isBetween(minDate, maxDate, 'day', '[]');

                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (!isDisabled) {
                                    console.log('Selected Date:', momentDate.format('YYYY-MM-DD'));
                                    setSelectedDate(momentDate);
                                }
                            }}
                            activeOpacity={0.7}
                            style={{
                                height: verticalScale(65),
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View
                                style={[
                                    styles.dayContainer,
                                    {
                                        backgroundColor: isSelected ? '#00A8A8' : '',
                                    },
                                ]}>
                                <Text
                                    style={{
                                        color: isSelected ? 'white' : '#3C3C4399',
                                        fontSize: isSelected ? 16 : 13,
                                        fontWeight: isSelected ? '600' : '300',
                                    }}>
                                    {momentDate.format('ddd')}
                                </Text>
                                <Text
                                    style={{
                                        color: isSelected ? 'white' : '#3C3C4399',
                                        fontSize: isSelected ? 16 : 13,
                                        fontWeight: isSelected ? 'bold' : '400',
                                        marginTop: verticalScale(4)
                                    }}>
                                    {momentDate.format('DD')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectedDateText: {
        fontSize: moderateScale(16),
        fontFamily: "Nunito-SemiBold",
        color: '#333',
    },
    dayContainer: {
        height: verticalScale(50),
        borderRadius: moderateScale(10),
        width: horizontalScale(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    todayButtonText: {
        fontSize: moderateScale(12),
        color: '#3338',
        fontFamily: "Nunito-SemiBold",
    },
    todayButton: {
        // marginEnd: horizontalScale(8)
    },
    goTodayView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',  
        marginBottom: verticalScale(10),
    }
});

export default CustomCalendar;
