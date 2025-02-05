import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../styles';

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(20),
    },
    label: {
        fontSize: moderateScale(22),
        fontFamily: "Nunito-Bold",
        color: '#000',
        marginBottom: verticalScale(8),
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        height: verticalScale(44),
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        fontSize: moderateScale(18),
        fontFamily: "Nunito-SemiBold",
        color: '#000',
        padding: verticalScale(0),
        height: '100%',
    },
    icon: {
        fontSize: moderateScale(24),
        color: '#666',
        marginLeft: moderateScale(10),
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(10),
        padding: moderateScale(16),
        width: '90%',
        alignItems: 'center',
    },
    closeButton: {
        paddingHorizontal: moderateScale(20),
        backgroundColor: '#FFFF',
        borderRadius: moderateScale(8),
        alignSelf: 'flex-start', marginBottom: moderateScale(20)
    },
    closeButtonText: {
        color: '#00A8A8',
        fontSize: moderateScale(16),
        fontFamily: "Nunito-Bold",
    },
    errormsg: {
        color: 'red',
        height: verticalScale(16)
    }
});

export default styles;
