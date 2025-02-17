import { Dimensions, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../styles'; // Adjust the import path as needed

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: horizontalScale(16),  // Use horizontal scale for padding
        backgroundColor: "#F8F9FA",
    },
    // title: {
    //     fontSize: moderateScale(22),
    //     marginBottom: verticalScale(10),
    //     color:'#000',
    //     height: verticalScale(60),
    //     flexWrap: "wrap", // Enable text wrapping
    //     maxWidth: "100%",
    //     fontFamily: "Nunito-Bold",
    // },
    title: {
        fontSize: moderateScale(22),
        marginBottom: verticalScale(20),
        color: '#000',
        minHeight: verticalScale(30), // Ensures short text does not take extra space
        maxHeight: verticalScale(60), // Limits max height for multi-line text
        fontFamily: "Nunito-Bold",
        flexWrap: "wrap", // Ensures text wraps
        width: "100%", // Forces text to stay within the parent container
        flexShrink: 1, // Prevents text from overflowing out of the screen
    },

    button: {
        borderWidth: 1,
        borderColor: "#000",
        // marginTop:verticalScale(10),
        borderRadius: moderateScale(8), // Moderate scale for border radius
        padding: horizontalScale(12), // Horizontal scale for padding
        marginBottom: verticalScale(20), // Vertical scale for margin
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: verticalScale(54)
        // height: verticalScale(44)
    },
    selectedButton: {
        borderColor: "#00A8A8", // Darker border color for selected button
        borderWidth: moderateScale(2), // Thicker border using moderateScale
        fontFamily: "Nunito-Bold",
    },
    buttonText: {
        fontSize: moderateScale(16), // Moderate scaling for font size
        color: "#000",
        fontFamily: "Nunito-SemiBold",
    },
    selectedButtonText: {
        color: "#00A8A8", // Selected button text color
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: horizontalScale(24),
        height: verticalScale(24),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: horizontalScale(5)
    },
    selectedIconContainer: {
        position: 'absolute',
        right: horizontalScale(16), // Adjust the distance from the right edge based on padding
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    errormsg: {
        color: 'red',
        height: verticalScale(20)
    }
});

export default styles;
