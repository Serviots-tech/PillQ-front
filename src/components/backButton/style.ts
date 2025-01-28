import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding:moderateScale(10)
    },
    backBtn: {
        fontSize: moderateScale(16),
    },
    centerText: {
        flex: 1,
        textAlign: "center",
        fontFamily: 'Nunito-Bold',
        // color:'#00A8A8',
        marginLeft:moderateScale(-40),
        fontSize: moderateScale(16),
    },
});

export default styles;
