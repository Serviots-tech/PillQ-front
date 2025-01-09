import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Navigation/AuthStack";
import { navigationStrings } from "../../constants/navigationStrings";
import styles from "./style";
import CustomButton from "../../components/customButton";

const PasswordResetSuccess: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Password Reset
            Successful!</Text>
          <Text style={styles.subtitle}>
            Your password has been updated.
            Use your new credentials to log in.
          </Text>

        </View>
        <CustomButton
          onPress={() => { navigation.navigate(navigationStrings.LOGIN) }}
          label={"Log In"}
          buttonTextStyle={styles.buttonText}
          viewStyle={styles.button}
          isLoading={false}
        />
      </View>
    </>
  );
};

export default PasswordResetSuccess;