import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState,useRef } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text, BackHandler, Alert, ScrollView,Animated,Easing, Dimensions} from 'react-native';
import { RootStackParamList } from '../../Navigation/Routes';
import CustomCalender from '../../components/customCalender';
import moment, { Moment } from 'moment';
import ProgressBarWithDivision from '../../components/progresBarWithDivision';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMedicines } from '../../redux/actions/medicinesAction';
import { AppDispatch } from '../../redux/store';
import { Tablet } from '../../constants/svgs';
import CustomProfileHeader from '../../components/customProfileHeader';
import CustomLoader from '../../components/customLoader';
import CustomNoRecords from '../../components/customNoRecords';
import CustomGroup from '../../components/customGroup';
import GestureRecognizer from 'react-native-swipe-gestures';

type LogInAsGuestProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const screenWidth = Dimensions.get('window').width; // Get full screen width

type State = {
    open: boolean;
};

const Home: React.FC<LogInAsGuestProps> = ({ navigation }) => {
    const [isLoading, setIsloading] = useState(false)
    const [isLogOutLoading, setIsLogOutLoading] = useState(false)
    const [dateFromCalender, setDateFromCalender] = useState<Moment>(moment());
    const calenderdate = dateFromCalender.format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');

    const [state, setState] = useState({ open: false });


    const onStateChange = ({ open }: State) => setState({ open });

    const { open } = state;

    const dispatch = useDispatch<AppDispatch>();
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setIsloading(true)
        dispatch(getUserMedicines()).then((res: any) => {
        }).catch((err: any) => {
        }).finally(() => {
            setIsloading(false)
        });
    }, [dispatch]);
    useEffect(() => {
        const backAction = () => {
            if (navigation.canGoBack()) {
                navigation.goBack(); // Navigate back if possible
                return true;
            }

            // If navigation stack is empty, show exit alert
            Alert.alert('Exit App', 'Are you sure you want to exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
            return true; 
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove(); 
    }, [navigation]);

    const userMedicineData = useSelector((state: any) => state?.getMedicine?.data) || [];

    const allMedicines: any[] = [];

    Object.keys(userMedicineData).forEach((key) => {
        if (key === dateFromCalender.format('YYYY-MM-DD')) {
            userMedicineData[key]?.filter((item: any) => {
                allMedicines.push(item)
            })
        }
    });

    const sortedMedicines = allMedicines.sort((a: any, b: any) =>
        new Date(a.doseTime).getTime() - new Date(b.doseTime).getTime()
    );


    const groupedMedicines = sortedMedicines.reduce((acc: any, med: any) => {
        const time = moment(med.doseTime).format("hh:mm A"); // Format time in 12-hour format
        if (!acc[time]) {
            acc[time] = [];
        }
        acc[time].push(med);
        return acc;
    }, {});
    
    const onSwipeLeft = () => {
      animateSwipe(-1, () => {
        setDateFromCalender(moment(dateFromCalender).clone().add(1, 'days'));
      });
    };

    const onSwipeRight = () => {
      animateSwipe(1, () => {
        setDateFromCalender(
          moment(dateFromCalender).clone().subtract(1, 'days'),
        );
      });
    };

    const animateSwipe = (direction: number, callback: () => void) => {
      Animated.timing(translateX, {
        toValue: direction * screenWidth, // Move full screen width
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        callback(); // Update date AFTER animation completes
        translateX.setValue(-direction * screenWidth); // Reset position

        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      });
    };

    const getDateFromCalender = (newDate: Moment) => {
      if (newDate.isSame(dateFromCalender, 'day')) return; // Prevent redundant updates

      const direction = newDate.isAfter(dateFromCalender) ? -1 : 1; // Determine swipe direction

      animateSwipe(direction, () => {
        setDateFromCalender(newDate); // Update date AFTER swipe animation
      });
    };

    return (
        <>
            <SafeAreaView />
            {isLogOutLoading ? <View style={styles?.loaderView}><CustomLoader style={styles?.loader} /></View> : <CustomGroup onStateChange={onStateChange} isOpen={open}>
                <CustomProfileHeader setIsLogOutLoading={setIsLogOutLoading} />
                <View style={styles.mainContainer}>
                    <View style={styles.calenderView}>
                        <CustomCalender getDateFromCalender={setDateFromCalender} dateFromCalender={dateFromCalender}/>
                    </View>
                    <View style={styles.progressView}>
                        <ProgressBarWithDivision calenderdate={calenderdate} today={today} totalTasks={Number(Object.values(groupedMedicines).reduce((sum, arr:any) => sum + arr.length, 0))} />
                    </View>
                    <View style={styles.brView} />

            <View style={styles.medicineContainer}>
              <GestureRecognizer
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
                style={{flex: 1, width: '100%'}} // Style the GestureRecognizer for the swipe area
              >
                <Animated.View
                  style={[
                    styles.animatedView,
                    {transform: [{translateX}], width: screenWidth},
                  ]}>
                  {isLoading ? (
                    <View style={styles?.loaderView}>
                      <CustomLoader style={styles?.loader} />
                    </View>
                  ) : Object.keys(groupedMedicines).length === 0 ? (
                    // <View style={styles?.imgView}>
                    <View style={styles.noRecordsImgContainer}>
                      <CustomNoRecords style={styles.noRecordsImg} />
                    </View>
                  ) : (
                    <ScrollView>
                      {Object.keys(groupedMedicines).map(time => {
                        return (
                          <View key={time}>
                            <Text style={styles.timeHeader}>
                              {time || 'No Time Available'}
                            </Text>
                            {groupedMedicines[time].map((item: any) => {
                              return (
                                <View key={item.id} style={styles.medicineCard}>
                                  <View style={styles.medicineIconContainer}>
                                    <Text>
                                      {item?.medicineForm ? <Tablet /> : ''}
                                    </Text>
                                  </View>
                                  <View style={styles.line} />
                                  <View style={styles.medicineDetailsContainer}>
                                    <View>
                                      <Text style={styles?.medicineName}>
                                        {item?.medicineName?.length > 10
                                          ? item?.medicineName.substring(
                                              0,
                                              25,
                                            ) + '...'
                                          : item?.medicineName}
                                      </Text>
                                    </View>
                                    <Text style={styles?.medicineForm}>
                                      {item?.medicineForm?.toUpperCase()}
                                    </Text>
                                  </View>
                                </View>
                              );
                            })}
                          </View>
                        );
                      })}
                    </ScrollView>
                  )}
                </Animated.View>
              </GestureRecognizer>
            </View>
          </View>
        </CustomGroup>}
      </>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  calenderView: {
    height: verticalScale(93),
    marginHorizontal: horizontalScale(12),
  },
  progressView: {
    marginHorizontal: horizontalScale(12),
    marginBottom: verticalScale(8),
  },
  brView: {
    width: '100%',
    height: 1,
    backgroundColor: '#3333',
  },
  medicineCard: {
    backgroundColor: 'white',
    height: verticalScale(75),
    marginHorizontal: horizontalScale(12),
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(5),
        borderColor: "#333",
    borderWidth: 1,
        flexDirection: "row"
  },
  medicineName: {
    fontSize: moderateScale(20),
        fontFamily: "Nunito-Bold"
  },
  medicineDetails: {
    fontSize: moderateScale(14),
    color: '#555',
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // noRecordsImg: {
  //     width: horizontalScale(180),
  //     height: verticalScale(180),
  //     // margin:moderateScale(100)
  // },
  noRecordsImgContainer: {
    flex: 1,
        alignItems: "center",
        justifyContent: "center",
  },

    noRecordsImg: {
        width: "50%",
        height: "37%",
        resizeMode: "cover", // Adjust as needed: 'cover' or 'center'
  },
  timeHeader: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#333',
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(12),
  },
  medicineContainer: {
        flex: 1
  },
  medicineDetailsContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: horizontalScale(10),
  },
  medicineIconContainer: {
    flex: 0.8,
    justifyContent: 'center',
        alignItems: "center"
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#333',
  },
  medicineForm: {
        fontFamily: "Nunito-Regular"
  },
  loader: {
    width: horizontalScale(45),
    height: verticalScale(45),
    resizeMode: 'contain',
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  animatedView: {
    flex: 1,
    width: '100%',
  },
});

export default Home;
