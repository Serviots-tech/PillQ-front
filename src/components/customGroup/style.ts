import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles';


const styles = StyleSheet.create({
    icon: {
        backgroundColor: '#00A8A8',
        width: horizontalScale(50),
        height: verticalScale(50),
    },
    iconContainer: {
        width: horizontalScale(20),
        height: verticalScale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: '#000',
    },
});

export default styles;