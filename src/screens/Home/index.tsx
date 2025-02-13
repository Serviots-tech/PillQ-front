import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { RootStackParamList } from '../../Navigation/Routes';
import CustomCalender from '../../components/customCalender';

import { horizontalScale, moderateScale, verticalScale } from '../../styles';
import { NotificationIcon } from '../../constants/svgs';
import ProgressBarWithDivision from '../../components/progresBarWithDivision';
import moment, { Moment } from 'moment';
import CustomProfileHeader from '../../components/customProfileHeader';

type LogInAsGuestProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<LogInAsGuestProps> = ({ navigation }) => {
    const [dateFromCalender, setDateFromCalender] = useState<Moment>(moment());
    const calenderdate = dateFromCalender.format('DD MMMM');
    const today = moment().format('DD MMMM');

    return (
        <>
            <SafeAreaView />
            <View style={styles.mainContainer}>
                <View style={styles?.imgWrapper}>
                    <View style={styles.imgContainer}>
                        <View style={styles.container}>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6?q=80&w=2924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                }}
                                style={styles.profileImage}
                            />
                        </View>
                        <Text style={styles.profileText}>Alok</Text>
                    </View>
                    <View>
                        <NotificationIcon />
                    </View>
                </View>
                <View style={styles.calenderView}>
                    <CustomCalender getDateFromCalender={setDateFromCalender} />
                </View>
                <View style={styles.progressView}>
                    <ProgressBarWithDivision calenderdate={calenderdate} today={today} />
                </View>

                <View style={styles.brView} />
                <CustomProfileHeader/>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '',

        marginTop: verticalScale(10),
    },
    container: {
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: 60, // Half of width/height to make it round
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: moderateScale(20),
        paddingStart: horizontalScale(8),
    },
    imgWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Center vertically
        marginBottom: verticalScale(14),
        marginHorizontal: horizontalScale(12),
    },
    calenderView: {
        height: verticalScale(93),
        marginHorizontal: horizontalScale(12),
    },
    progressView:{
        marginHorizontal: horizontalScale(12),
        marginBottom:verticalScale(8)
    },
    brView: {
        width: '100%',
        height: 1,
        backgroundColor: '#3333',
    },
});

export default Home;
