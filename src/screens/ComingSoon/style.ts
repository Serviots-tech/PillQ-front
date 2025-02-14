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
});

export default styles;
