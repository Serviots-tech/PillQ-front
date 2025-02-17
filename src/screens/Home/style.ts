import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';


const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20, // Optional: Adds space at the bottom for scrolling
        paddingHorizontal: 10, // Optional: Adds horizontal padding if needed
    },
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
    noRecordsImg: {
        width: horizontalScale(180),
        height: verticalScale(180),
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

});

export default styles;