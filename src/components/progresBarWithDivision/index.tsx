import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';

interface ProgressBarProps {
    completedTasks?: number;
    totalTasks?: number;
    height?: number;
    gapWidth?: number;
    backgroundColor?: string;
    fillColor?: string;
    detailsText?: string;
    calenderdate?: any,
    today?:any
}

const ProgressBarWithDivision = ({
    completedTasks = 6,
    totalTasks = 10,
    height = 6,
    gapWidth = 4,
    backgroundColor = '#E1E3E4',
    fillColor = '#00A8A8',
    detailsText,
    today,
    calenderdate
}: ProgressBarProps) => {
    const segmentWidth = totalTasks > 1 ? (100 / totalTasks) - (((totalTasks - 1)) / totalTasks) : 100;

    return (
        <View style={styles.outerContainer}>
            <View style={styles.inlineTextContainer}>
                {detailsText && <Text style={styles.detailsText}>{detailsText}</Text>}
                <Text style={styles.todaysText} >{today === calenderdate ? "Today's Progress" : "Progress"}</Text>
                <Text style={styles.percentageText}>{`${completedTasks}/${totalTasks}`}</Text>
            </View>
            <View style={[styles.container, { height }]}>
                {Array.from({ length: totalTasks }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.segment,
                            {
                                width: `${segmentWidth}%`, 
                                backgroundColor: index < completedTasks ? fillColor : backgroundColor,
                                marginRight: index < totalTasks - 1 ? gapWidth : 0, 
                            },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        height: verticalScale(60),
        justifyContent: 'center',

    },
    inlineTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(8),
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        flexDirection: 'row',
        borderRadius: moderateScale(10)
    },
    segment: {
        height: '100%',
    },
    percentageText: {
        fontFamily: 'Nunito-Bold',
        fontSize: moderateScale(18),
    },
    detailsText: {
        fontSize: moderateScale(20),
        fontFamily: 'Nunito-Regular',
    },
    todaysText:{
        fontSize: moderateScale(16),
        fontFamily: 'Nunito-Regular',
    }
});

export default ProgressBarWithDivision;
