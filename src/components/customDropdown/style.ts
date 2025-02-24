import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, verticalScale, horizontalScale } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: moderateScale(22),
        fontFamily: 'Nunito-Bold',
        color: '#000000',
        marginBottom: verticalScale(20),
        flexShrink: 1
    },
    input: {
        height: verticalScale(50),
        borderRadius: moderateScale(8),
        paddingHorizontal: horizontalScale(10),
        flex: 1,
    },
    item: {
        padding: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemActive: {
        backgroundColor: '#E4E4E4',
        borderRadius: 5
    },
    itemText: {
        fontSize: moderateScale(16),
        color: '#C0C2C3',
    },
    boldText: {
        color: '#5C5F61',
        fontSize: moderateScale(16),
        fontFamily: 'Nunito-Bold',
    },
    footerText: {
        marginTop: verticalScale(10),
        fontSize: moderateScale(14),
        color: '#C0C2C3',
        textAlign: 'center',
    },
    itemPressed: {
        backgroundColor: '#f0f0f0',
    },
    icon: {
        marginRight: horizontalScale(5),
    },
    suffixIcon: {
        marginLeft: horizontalScale(10),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 4,
        paddingRight: horizontalScale(10),
        paddingLeft: horizontalScale(10),
        paddingVertical: verticalScale(10),
        height: verticalScale(50),
        color: '#000000'
    },
    filteredItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listContentContainer: {
        paddingBottom: verticalScale(20),
    },
    loader: {
        width: horizontalScale(20),
        height: verticalScale(20),
        resizeMode: 'contain',
    },
});

export default styles;
