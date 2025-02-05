import React from "react";
import { View, Platform, Text, GestureResponderEvent, TextStyle, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AndroidbackIcon, IosbackIcon } from "../../constants/svgs";
import CustomButton from "../customButton";
import styles from "./style";

type BackButtonProps = {
    label?: string;
    targetScreen?: string;
    buttonTextStyle?: TextStyle;
    backIconStyle?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
};

const BackButtonComponent: React.FC<BackButtonProps> = ({
    label = "Back",
    targetScreen,
    buttonTextStyle,
    backIconStyle,
    onPress,
}) => {
    const navigation = useNavigation();

    const handlePress = (event: GestureResponderEvent) => {
        if (onPress) {
            onPress(event);
        } else if (targetScreen) {
            navigation.navigate(targetScreen as never);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <View style={[backIconStyle]}>
                <CustomButton
                    label={label}
                    buttonTextStyle={[styles.backBtn, buttonTextStyle]}
                    onPress={handlePress}
                    icon={Platform.OS === "ios" ? <IosbackIcon /> : <AndroidbackIcon />}
                />
            </View>
            <Text style={styles.centerText}>
                scfsddfgdsgdfrgef
            </Text>
        </View>
    );
};

export default BackButtonComponent;
