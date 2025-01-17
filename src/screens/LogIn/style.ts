import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F9FA",
        justifyContent: "space-between",
    },
    backicon: {
        marginBottom: 12
    },
    backBtn: {
        fontSize: 17
    },
    titletext: {
        marginBottom: 10
    },
    title: {
        fontSize: 34,
        marginBottom: 8,
        fontFamily: "Nunito-Bold",
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 14,
        color: "#00bfa5",
        fontFamily: "Nunito-Bold",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        marginBottom: 2,
        color: "#6b6b6b",
        fontFamily: "Nunito-SemiBold",
    },
    fieldContainer: {
        marginBottom: 10,
    },
    fieldTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    inputPassword: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
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
        marginTop: 10,
        textAlign: "center",
        color: "#6b6b6b",
        fontFamily: "Nunito-SemiBold",
    },
    link: {
        color: "#00bfa5",
        fontFamily: "Nunito-Bold",
    },
});

export default styles;

