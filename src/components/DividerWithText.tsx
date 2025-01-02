import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default function DividerWithText() {
    return (
        <View style={styles.container}>
            <View style={styles.leftLine} />
            <Text style={styles.text}>or</Text>
            <View style={styles.rightLine} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(5),
    },
    leftLine: {
        width: moderateScale(68), // Fixed width for the left line
        height: 1,
        backgroundColor: '#ccc',
    },
    text: {
        marginHorizontal: moderateScale(10),
        fontSize: moderateScale(14),
        color: '#ffffff',
    },
    rightLine: {
        width: moderateScale(68), // Fixed width for the right line
        height: 1,
        backgroundColor: '#ccc',
    },
});
