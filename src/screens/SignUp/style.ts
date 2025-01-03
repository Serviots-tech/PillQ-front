import { Dimensions, StyleSheet } from "react-native";
import  SCALE, { horizontalScale, isSmallDevice, moderateScale, verticalScale } from "../../styles";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  titletext:{
    marginBottom:10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
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
    borderRadius: 8,
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
    height: SCREEN_WIDTH < 768 ?  verticalScale(48)  :verticalScale(44),
    borderRadius: moderateScale(54),
    marginVertical: verticalScale(16),
    backgroundColor: '#00a8a8', 
    
},
buttonText: {
  fontFamily: 'Nunito-SemiBold',
  fontSize: moderateScale(20),
  paddingVertical: verticalScale(9),
  textAlign: 'center',
  color:'#ffff'
},
  footer: {
    marginTop: 20,
    textAlign: "center",
    color: "#6b6b6b",
  },
  link: {
    color: "#00bfa5",
    fontWeight: "bold",
  },
});

export default styles;
