import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
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

type LogInAsGuestProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<LogInAsGuestProps> = ({ navigation }) => {
    const [dateFromCalender, setDateFromCalender] = useState<Moment>(moment());
    const calenderdate = dateFromCalender.format('YYYY-MM-DD');  // Ensure this matches your API date format
    const today = moment().format('YYYY-MM-DD');

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUserMedicines());
    }, [dispatch]);

    const userMedicineData = useSelector((state: any) => state?.getMedicine?.data) || [];

    const allMedicines: any[] = [];

    Object.keys(userMedicineData).forEach((key) => {
        if (key === calenderdate) {
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



    return (
        <>
            <SafeAreaView />
            <CustomProfileHeader />
            <View style={styles.mainContainer}>
                <View style={styles.calenderView}>
                    <CustomCalender getDateFromCalender={setDateFromCalender} />
                </View>
                <View style={styles.progressView}>
                    <ProgressBarWithDivision calenderdate={calenderdate} today={today} totalTasks={groupedMedicines.length} />
                </View>
                <View style={styles.brView} />

                <View style={styles.medicineContainer}>
                    {Object.keys(groupedMedicines).map((time) => (
                        <View key={time}>
                            <Text style={styles.timeHeader}>{time || 'No Time Available'}</Text>
                            {groupedMedicines[time].map((item: any) => {
                                return <View key={item.id} style={styles.medicineCard}>
                                    <View style={styles.medicineIconContainer}>
                                        <Text >{item?.medicineForm ? <Tablet /> : ""}</Text>
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.medicineDetailsContainer}>
                                        <View >
                                            <Text style={styles?.medicineName}>{item?.medicineName}</Text>
                                        </View>
                                        <Text style={styles?.medicineForm}>{item?.medicineForm} </Text>
                                    </View>
                                </View>

                            })}
                        </View>
                    ))}
                </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        // paddingTop: verticalScale(8),
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
    emptyText: {
        textAlign: 'center',
        marginTop: verticalScale(20),
        fontSize: moderateScale(16),
        color: '#999',
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
        flex: 4, // Take more space for the dosage
        justifyContent: 'center',
        paddingLeft: horizontalScale(10), // Adjust space between line and dosage
    },
    medicineIconContainer: {
        flex: 0.8, // Take available space for the medicine name
        justifyContent: 'center',
        alignItems: "center"
    },
    line: {
        width: 1, // Width of the vertical line
        height: '100%', // Stretch to the full height of the parent
        backgroundColor: '#333', // Line color
    },
    medicineForm: {
        fontFamily: "Nunito-Regular"
    }

});

export default Home;
