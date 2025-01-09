import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default function DividerWithText({ text = 'or', color = '#ccc' }) {
    return (
        <View style={styles.container}>
            <View style={[styles.line, styles.leftLine, { backgroundColor: color }]} />
            <Text style={[styles.text, { color }]}>{text}</Text>
            <View style={[styles.line, styles.rightLine, { backgroundColor: color }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(5),
    },
    line: {
        height: 1,
    },
    leftLine: {
        width: moderateScale(68), // Default width for the left line
    },
    rightLine: {
        width: moderateScale(68), // Default width for the right line
    },
    text: {
        marginHorizontal: moderateScale(10),
        fontSize: moderateScale(14),
    },
});
