import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');



export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F9FA",
        justifyContent: "space-between",
    },
    backicon: {
        marginBottom: 20,
    },
    backBtn: {
        fontSize: 17
    },
    title: {
        fontSize: 34,
        marginBottom: 8,
        fontFamily: "Nunito-Bold",
    },
    subtitle: {
        fontSize: 17,
        color: "#666",
        marginBottom: 30,
        fontFamily: "Nunito-SemiBold",
    },
    fieldContainer: {
        marginBottom: 20,
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
});
