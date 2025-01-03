import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale } from 'react-native-size-matters'; 
import SCALE, { horizontalScale, isSmallDevice } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', // So we can overlay the content on top of the image
    },
    imageStyle: {
        position: 'absolute', // Positioning the image as background
        top: 0,
        left: 0,
        width: '100%',
        height: 914,
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        paddingTop: isSmallDevice ? moderateScale(45) : moderateScale(55),
        zIndex: 1, // Ensures the content is above the background image
    },
    textBold: {
        fontFamily: "Nunito-Bold",
        fontSize: SCREEN_WIDTH < 768 ? 28 : SCALE.normalize(28, 'height'),
        color: "#ffffff",
    },
    button: {
        width: horizontalScale(332),
        height: moderateScale(48),
        borderRadius: moderateScale(54),
        marginVertical: moderateScale(16),
        backgroundColor: '#ffffff', // Button background color
    },
    buttonText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: scale(20),
        paddingVertical: moderateScale(12),
        color: '#00A8A8', // Text color for the button
        textAlign: 'center',
    },
    logInasGuesttextBold: {
        fontFamily: "Nunito-Bold",
        fontSize: scale(20),
        paddingVertical: moderateScale(6),
        color: "#ffffff",
    },
    haveAnAcc: {
        flexDirection: 'row',
        fontFamily: "Nunito-Regular",
        fontSize: scale(16),
        color: "#ffffff",
        paddingTop: moderateScale(4),
    },
    logInText: {
        fontFamily: "Nunito-Bold",
        fontSize: scale(16),
        color: "#ffffff",
    },
    privacyPolicyText: {
        fontFamily: "Nunito-Regular",
        fontSize: scale(12), // Adjust for better spacing
        color: "#ffffff",
        textAlign: 'center',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
    },
    privacyPolicyTextBold: {
        fontFamily: "Nunito-Bold",
        color: "#ffffff",
    },
});