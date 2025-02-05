
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 10,
  },
  fieldTitle: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5,
    fontFamily: "Nunito-SemiBold",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    fontFamily: "Nunito-SemiBold",
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 4,
    padding:10,
    height:50
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 0,
    fontFamily: "Nunito-SemiBold",
    height:50
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  inputError: {
    borderColor: "red",
  },
  inputDisabled: {
    backgroundColor: '#f0f0f0',
    color: '#d3d3d3', 
    borderColor: '#d3d3d3', 
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;