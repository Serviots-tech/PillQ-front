import { Dimensions, StyleSheet } from "react-native";
import SCALE, { horizontalScale, isSmallDevice, moderateScale, verticalScale } from "../../styles";

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
  subtitle: {
    fontSize: 18,
    marginBottom: 2,
    fontWeight: 500,
    color: "#6b6b6b",
    fontFamily: "Nunito-semiBold",
  },
  button: {
    width: horizontalScale(332),
    height: SCREEN_WIDTH < 768 ? verticalScale(48) : verticalScale(44),
    borderRadius: moderateScale(54),
    marginVertical: verticalScale(16),
    backgroundColor: '#00a8a8',

  },
  buttonText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(20),
    paddingVertical: verticalScale(9),
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
  dividertext: {
    marginVertical: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
