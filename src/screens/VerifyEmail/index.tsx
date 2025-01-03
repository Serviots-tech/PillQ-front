import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style"; // Adjust the path as per your project structure
import CustomButton from "../../components/customButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigation/AuthStack";

const VerifyEmail: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input field if the input is not empty
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    // Add your OTP resend logic here
  };

  const handleVerify = () => {
    console.log("OTP Entered: ", otp.join(""));
    // Add your OTP verification logic here
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.backicon}>
          <CustomButton label={"back-icon"} onPress={() => { navigation.goBack(); }} isIcon={true} />
        </View>

        <Text style={styles.title}>Check your email</Text>
        <Text style={styles.subtitle}>We have sent an OTP to example@gmail.com</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldTitle}>Enter OTP:</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref!)}
                style={[styles.input, { width: 50, textAlign: "center" }]}
                keyboardType="numeric"
                maxLength={1}
                value={value}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    handleBackspace(value, index);
                  }
                }}
              />
            ))}
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.footer}>
            Don't receive the OTP?{" "}
            <Text style={styles.link}>Click to Resend</Text>
          </Text>
        </TouchableOpacity>

        <CustomButton onPress={handleVerify} label={"Verify Email"} buttonTextStyle={styles.buttonText} viewStyle={styles.button}/>
      </View>
    </View>
  );
};

export default VerifyEmail;
