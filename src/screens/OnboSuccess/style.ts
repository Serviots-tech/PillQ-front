import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../../styles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        padding: moderateScale(16),
    },
    contentContainer: {
        alignItems: "center",
        marginTop: verticalScale(40),
    },
    imagePlaceholder: {
        width: moderateScale(200),
        height: moderateScale(200),
        borderRadius: moderateScale(15),
        backgroundColor: "#E0E0E0",
        marginBottom: verticalScale(24),
    },
    title: {
        fontSize: moderateScale(22),
        fontFamily: "Nunito-Bold",
        color: "#000000",
        textAlign: "center",
        marginBottom: verticalScale(8),
    },
    subtitle: {
        fontSize: moderateScale(16),
        fontFamily: "Nunito-SemiBold",
        color: "#6B6B6B",
        textAlign: "center",
        lineHeight: verticalScale(22),
        paddingHorizontal: horizontalScale(16),
    },
    buttonContainer: {
        alignItems: "center",
        marginBottom: verticalScale(16),
    },
    primaryButton: {
        width: horizontalScale(332),
        height: SCREEN_WIDTH < 768 ? verticalScale(48) : verticalScale(44),
        borderRadius: moderateScale(54),
        backgroundColor: "#00A8A8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: verticalScale(16),
    },
    primaryButtonText: {
        fontFamily: "Nunito-SemiBold",
        fontSize: moderateScale(18),
        color: "#FFFFFF",
    },
    secondaryButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    secondaryButtonText: {
        fontFamily: "Nunito-SemiBold",
        fontSize: moderateScale(16),
        color: "#6B6B6B", //6B6B6B
    },
    docImg:{
    width: horizontalScale(300),
    height: moderateScale(300),
},
});

export default styles;
