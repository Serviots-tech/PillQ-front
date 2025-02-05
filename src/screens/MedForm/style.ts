import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        backgroundColor: "#F8F9FA",
        justifyContent: "space-between",
    },
    backicon: {
        marginBottom: verticalScale(12)
    },
    backBtn: {
        fontSize: moderateScale(17)
    },
    titletext: {
        marginBottom: verticalScale(10)
    },
    title: {
        fontSize: moderateScale(34),
        marginBottom: verticalScale(8),
        fontFamily: "Nunito-Bold",
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: moderateScale(14),
        color: "#00bfa5",
        fontFamily: "Nunito-Bold",
        marginBottom: verticalScale(12),
    },
    subtitle: {
        fontSize: moderateScale(18),
        fontWeight: 500,
        marginBottom: verticalScale(2),
        color: "#6b6b6b",
        fontFamily: "Nunito-SemiBold",
    },
    fieldContainer: {
        marginBottom: verticalScale(10),
    },
    fieldTitle: {
        fontSize: moderateScale(16),
        fontWeight: "500",
        marginBottom: verticalScale(5),
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        padding: moderateScale(10),
        marginBottom: verticalScale(10),
    },
    inputPassword: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        padding: moderateScale(10),
        marginBottom: verticalScale(10),
    },
    error: {
        color: "red",
        fontSize: moderateScale(12),
        marginBottom: verticalScale(10),
    },
    button: {
        width: horizontalScale(332),
        height: SCREEN_WIDTH < 768 ? verticalScale(48) : verticalScale(44),
        borderRadius: moderateScale(54),
        backgroundColor: '#00a8a8',
        marginBottom: verticalScale(8)
    },
    buttonText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: moderateScale(20),
        paddingVertical: SCREEN_WIDTH < 768 ? verticalScale(8) : verticalScale(6),
        textAlign: 'center',
        color: '#ffff'
    },
    footer: {
        marginTop: verticalScale(10),
        textAlign: "center",
        color: "#6b6b6b",
        fontFamily: "Nunito-SemiBold",
    },
    link: {
        color: "#00bfa5",
        fontFamily: "Nunito-Bold",
    },
    dividertext: {
        marginVertical: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: horizontalScale(10),
        top: verticalScale(12),
    },
    inputError: {
        borderColor: "red",
    },
    progressbarview: {
        marginBottom: verticalScale(20)
    }
});

export default styles;

