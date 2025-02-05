import { Dimensions, StyleSheet } from "react-native";
import SCALE, { horizontalScale, isSmallDevice, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F9FA",
        justifyContent: "space-between",
    },
    backicon: {
        marginBottom: moderateScale(12),
    },
    backBtn: {
        fontSize: moderateScale(17)
    },
    titletext: {
        marginBottom: moderateScale(10),
    },
    title: {
        fontSize: moderateScale(34),
        marginBottom: moderateScale(8),
        fontFamily: "Nunito-Bold",
    },
    subtitle: {
        fontSize: moderateScale(17),
        marginBottom: moderateScale(1),
        fontWeight: 500,
        color: "#6b6b6b",
        fontFamily: "Nunito-SemiBold",
        
    },
    fieldContainer: {
        marginBottom: moderateScale(10),
        marginTop: '3%',
        
    },
    otpContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        gap: horizontalScale(10),
    },
    input: {
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
        padding: 10,
        marginBottom: moderateScale(10),
        marginTop: '5%',
        color: '#00A8A8',
        fontWeight: 'bold',
        fontSize: moderateScale(24),
        width: horizontalScale(45),
        textAlign: "center"
    },
    error: {
        color: "red",
        fontSize: moderateScale(12),
        marginBottom: moderateScale(10),
    },
    button: {
        width: horizontalScale(332),
        height: SCREEN_WIDTH < 768 ? verticalScale(48) : verticalScale(44),
        borderRadius: moderateScale(54),
        marginVertical: verticalScale(16),
        backgroundColor: "#00a8a8",
    },
    buttonText: {
        fontFamily: "Nunito-SemiBold",
        fontSize: moderateScale(20),
        paddingVertical: verticalScale(9),
        textAlign: "center",
        color: "#fff",
    },
    footer: {
        marginTop: '5%',
        textAlign: "center",
        fontSize: moderateScale(18),
        color: "#333333",
        marginBottom: '1.5%',
        fontFamily: "Nunito-SemiBold",
    },
    link: {
        color: "#00bfa5",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: moderateScale(18),
        fontFamily: "Nunito-Bold",

    },
    disabledLink: {
        color: "#9FA2A4",
        fontWeight: "600",
        textAlign: "center",
        fontSize: moderateScale(18),
    },
});

export default styles;
