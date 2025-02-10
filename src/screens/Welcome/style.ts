import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, isSmallDevice, moderateScale, verticalScale } from "../../styles";

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
        paddingHorizontal: horizontalScale(20),
        paddingTop: isSmallDevice ? verticalScale(430) : verticalScale(456),
        zIndex: 1, // Ensures the content is above the background image
    },
    textBold: {
        fontFamily: "Nunito-Bold",
        fontSize: SCREEN_WIDTH < 768 ? moderateScale(23) : moderateScale(25),
        color: "#ffffff",
    },
    button: {
        width: horizontalScale(332),
        height: SCREEN_WIDTH < 768 ?  verticalScale(48)  :verticalScale(44),
        borderRadius: moderateScale(54),
        marginVertical: verticalScale(16),
        backgroundColor: '#ffffff', // Button background color
    },
    buttonText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: moderateScale(20),
        paddingVertical: verticalScale(9),
        color: '#00A8A8', // Text color for the button
        textAlign: 'center',
    },
    logInasGuesttextBold: {
        fontFamily: "Nunito-Bold",
        fontSize: moderateScale(20),
        paddingVertical: verticalScale(6),
        color: "#ffffff",
    },
    haveAnAcc: {
        flexDirection: 'row',
        fontFamily: "Nunito-Regular",
        fontSize: moderateScale(16),
        color: "#ffffff",
        paddingTop: verticalScale(4),
    },
    logInText: {
        fontFamily: "Nunito-Bold",
        fontSize: moderateScale(16),
        color: "#ffffff",
    },
    privacyPolicyText: {
        fontFamily: "Nunito-Regular",
        fontSize: moderateScale(12), // Adjust for better spacing
        color: "#ffffff",
        textAlign: 'center',
        paddingHorizontal: horizontalScale(16),
        paddingVertical: verticalScale(20),
    },
    privacyPolicyTextBold: {
        fontFamily: "Nunito-Bold",
        color: "#ffffff",
    },
});