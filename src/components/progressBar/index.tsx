import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '../../styles';

const ProgressBar = ({ percentage = 0, height = 4, backgroundColor = '#A5FBFB', fillColor = '#00A8A8'}) => {
    return (
        <View style={[styles.outerContainer]}>
            <View style={[styles.container, { height, backgroundColor }]}>
                <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: fillColor }]} />
            </View>
            {/* {showPercentage && (
                <Text style={styles.percentageText}>{`${Math.round(percentage)}%`}</Text>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        marginHorizontal: horizontalScale(10), 
    },
    container: {
        width: '100%',
        borderRadius: moderateScale(4),
        overflow: 'hidden',
        position: 'relative',
    },
    fill: {
        height: '100%',
        borderRadius: moderateScale(10),
    },
    percentageText: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProgressBar;
