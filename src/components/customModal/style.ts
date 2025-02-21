import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: horizontalScale(350),
        backgroundColor: '#fff',
        borderRadius: 18,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        width: '100%',
        padding: moderateScale(20),
        paddingBottom:verticalScale(15),
        borderBottomWidth: 1,
        borderBottomColor: '#00A8A8',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightModalHeader: {
        width: horizontalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        width: horizontalScale(350),
        borderBottomWidth: 1,
        borderBottomColor: '#00A8A8',
        padding:moderateScale(20),
        gap: horizontalScale(30),
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    desTxt: {
        color: '#525252',
        fontWeight: '400',
        fontFamily: 'Nunito-SemiBold',
        fontSize: moderateScale(15),
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Nunito-Regular',
        color: '#333',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center',
        padding:moderateScale(10),
        width: horizontalScale(230),
    },
    btntxt: {
        textAlign: 'center',
        color: '#00A8A8',
        fontSize: 16,
        marginTop:verticalScale(5),
        fontWeight: '500',
    },
});

export default styles;