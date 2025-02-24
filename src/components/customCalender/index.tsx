import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment, {Moment} from 'moment';
import {horizontalScale, moderateScale, verticalScale} from '../../styles';
import {imagePaths} from '../../constants/imagePath';
import {DoubleArrowIcon, LeftArrow, RightArrow} from '../../constants/svgs';
import styles from './style';

const CustomCalendar = ({
  getDateFromCalender,
  dateFromCalender,
}: {
  getDateFromCalender: (date: Moment) => void;
  dateFromCalender: Moment;
}) => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(
    dateFromCalender || moment(),
  );

  const [dates, setDates] = useState<Moment[]>([]);
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<Moment>>(null); // Reference for FlatList
  const [startIndex, setStartIndex] = useState<number>(0);

  // Sync selectedDate with parent’s state change
  useEffect(() => {
    if (!selectedDate?.isSame(dateFromCalender, 'day')) {
      setSelectedDate(dateFromCalender);

      const newIndex = dates.findIndex(date =>
        date.isSame(dateFromCalender, 'day'),
      );

      // Scroll to the new index
      if (newIndex !== -1) {
        scrollToIndex(newIndex);
      }
    }
  }, [dateFromCalender]);

  useEffect(() => {
    const tempDates = [];
    for (let i = -30; i <= 30; i++) {
      tempDates.push(moment().add(i, 'days'));
    }
    setDates(tempDates);

    // Find today's index
    const todayIndex = tempDates.findIndex(date =>
      date.isSame(moment(), 'day'),
    );
    setInitialIndex(todayIndex);
  }, []);

  useEffect(() => {
    if (dates.length > 0 && initialIndex !== -1) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: initialIndex,
          animated: false,
          viewPosition: 0.7, // Centers today's date
        });
        setStartIndex(initialIndex);
      }, 100);
    }
  }, [dates, initialIndex]);

  const handleDatePress = (date: Moment) => {
    setSelectedDate(date); 
    getDateFromCalender(date);
  };
  const goToToday = () => {
    const today = moment();
    setSelectedDate(today);
    getDateFromCalender(today);
    scrollToIndex(dates.findIndex(date => date.isSame(today, 'day')));
  };

  const scrollToIndex = (index: number) => {
    if (flatListRef.current && index !== -1) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.7,
      });
      setStartIndex(index);
    }
  };
  const goToPreviousWeek = () => {
    if (startIndex - 7 >= 0) {
      scrollToIndex(startIndex - 7);
    }
  };

  const goToNextWeek = () => {
    if (startIndex + 7 < dates.length) {
      scrollToIndex(startIndex + 7);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.goTodayView}>
        <Text style={styles.selectedDateText}>
          {selectedDate?.isSame(moment(), 'day') ? 'Today, ' : ''}
          {selectedDate
            ? selectedDate.format('DD MMMM')
            : moment().format('DD MMMM')}
        </Text>
        <TouchableOpacity style={styles.todayButton} onPress={goToToday}>
          <Text style={styles.todayButtonText}>
            <DoubleArrowIcon /> Today
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.weekWindow}>
        <TouchableOpacity onPress={goToPreviousWeek}>
          <LeftArrow />
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={dates}
          horizontal
          keyExtractor={item => item.format('YYYY-MM-DD')}
          showsHorizontalScrollIndicator={false}
          //   initialScrollIndex={initialIndex}
          getItemLayout={(data, index) => ({
            length: 45, // Ensure consistent spacing
            offset: 45 * index,
            index,
          })}
          renderItem={({item}) => {
            const isSelected = selectedDate ? item.isSame(selectedDate, 'day') : false;
            const isToday = !selectedDate && item.isSame(moment(), 'day');
            return (
              <TouchableOpacity
                style={[
                  styles.dayContainer,
                  {
                    backgroundColor: isSelected
                      ? '#00A8A8' // Highlight selected date
                      : isToday
                      ? '#D3D3D3' // Highlight today only if nothing else is selected
                      : 'transparent',
                  },
                ]}
                onPress={() => handleDatePress(item)}>
                <Text
                  style={{
                    color: isSelected ? 'white' : '#3C3C4399',
                    fontSize: isSelected ? 16 : 13,
                    fontWeight: isSelected ? '600' : '300',
                  }}
                >
                  {item.format('ddd')}
                </Text>
                <Text
                  style={{
                    color: isSelected
                      ? 'white'
                      : isToday
                      ? 'black'
                      : '#3C3C4399',
                    fontSize: isSelected ? 16 : 13,
                    fontWeight: isSelected ? 'bold' : isToday ? 'bold' : '400',
                    marginTop: verticalScale(4),
                  }}>
                  {item.format('D')}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity onPress={goToNextWeek}>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CustomCalendar;
