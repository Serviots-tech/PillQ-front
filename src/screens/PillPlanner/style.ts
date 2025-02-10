import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(20),
        justifyContent: "space-between",
        backgroundColor: '#FFFFFF',
    },
    progressbarview: {
        marginBottom: verticalScale(20)
    },
    title: {
        fontSize: moderateScale(22),
        marginBottom: verticalScale(20),
        color: '#000',
        minHeight: verticalScale(30),
        maxHeight: verticalScale(60),
        fontFamily: "Nunito-Bold",
        flexWrap: "wrap",
        width: "100%",
        flexShrink: 1,
    },
    subtitle: {
        fontSize: moderateScale(18),
        marginTop: verticalScale(8),
    },
    time: {
        fontSize: moderateScale(18),
        marginTop: verticalScale(16),
    },
    timeValue: {
        fontSize: moderateScale(22),
        fontFamily:'Nunito-Bold',
        marginTop: verticalScale(4),
    },
    pillContainer: {
        padding: moderateScale(16),
        backgroundColor: '#f5f5f5',
        borderRadius: moderateScale(8),
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: verticalScale(15),
    },
    label: {
        fontSize: verticalScale(18),
        color: "#333",
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "#999",
        paddingVertical: verticalScale(10),
        paddingHorizontal:"auto",
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        minWidth:horizontalScale(200),
        borderRadius: moderateScale(5),
    },
    text: {
        fontSize: moderateScale(16),
        fontWeight: "bold",
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

export default styles;

