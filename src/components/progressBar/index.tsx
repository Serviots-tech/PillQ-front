import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '../../styles';

// Props interface
interface ProgressBarProps {
    percentage?: number;
    height?: number;
    backgroundColor?: string;
    fillColor?: string;
    detailsText?: string; 
}
const ProgressBar = ({ percentage = 0, height = 4, backgroundColor = '#A5FBFB', fillColor = '#00A8A8', detailsText }: ProgressBarProps) => {
    return (
        <View>
            <View style={styles?.inlineTextContainer}>
                {detailsText && <Text style={styles.detailsText}>{detailsText}</Text>}
                <Text style={styles.percentageText}>{`${Math.round(percentage)}%`}</Text>
            </View>
            <View style={[styles.container, { height, backgroundColor }]}>
                <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: fillColor }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        marginHorizontal: horizontalScale(18),
    },
    inlineTextContainer: {
        flexDirection: 'row', // Arrange text elements in a row
        justifyContent: 'space-between', // Space between texts
        alignItems: 'center', // Vertical alignment
        marginBottom: moderateScale(8), // Space between text and progress bar
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
        fontFamily: 'Nunito-Bold',
        fontSize: moderateScale(18),
        color:'#00A8A8'
    },
    detailsText:{
        fontSize: moderateScale(18),
        fontFamily:'Nunito-Regular'
    }
    
});

export default ProgressBar;
