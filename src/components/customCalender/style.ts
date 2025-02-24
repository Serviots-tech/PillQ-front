import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedDateText: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
    color: '#333',
  },
  dayContainer: {
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    width: horizontalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayButtonText: {
    fontSize: moderateScale(12),
    color: '#3338',
    fontFamily: 'Nunito-SemiBold',
  },
  todayButton: {
  },
  goTodayView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  weekWindow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default styles;
