import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
      
    },
    comingSoonImg:{
        width:horizontalScale(300),
        height:verticalScale(300),
    },
    comingSoonText:{
        fontFamily:"Nunito-Bold",
        fontSize:moderateScale(30),
        color:"#00A8A8"
    }
});

export default styles;
