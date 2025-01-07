import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    backicon: {
        marginBottom: 12
    },
    titletext: {
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 0,
        fontFamily: "Nunito-Bold",
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 2,
        color: "#6b6b6b",
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
    },
    link: {
        color: "#00bfa5",
        fontWeight: "bold",
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
        right: 10,
        top: 12,
    },
    inputError: {
        borderColor: "red",
    }
});

export default styles;

