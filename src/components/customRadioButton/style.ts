import { Dimensions, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../styles'; // Adjust the import path as needed

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: horizontalScale(16),  // Use horizontal scale for padding
        backgroundColor: "#F8F9FA",
    },
    title: {
        fontSize: moderateScale(22),
        marginBottom: verticalScale(16),
        color:'#000',
        height:verticalScale(60),
        fontFamily: "Nunito-Bold",
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: moderateScale(8), // Moderate scale for border radius
        padding: horizontalScale(12), // Horizontal scale for padding
        marginBottom: verticalScale(10), // Vertical scale for margin
        alignItems: 'flex-start',
        justifyContent:'center',
        height:verticalScale(44)
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
        marginRight:horizontalScale(5)
    },
    selectedIconContainer: {
        position: 'absolute',
        right: horizontalScale(16), // Adjust the distance from the right edge based on padding
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    errormsg:{
        color:'red',
        height:verticalScale(16)
    }
});

export default styles;
