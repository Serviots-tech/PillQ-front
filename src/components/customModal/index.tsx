import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../styles';
import {
  CHECKICON,
  ClockIcon,
  CLOSEICON,
  EditIcon,
  InfoIcon,
  MenuIcon,
  MySVG,
  ShoppingBagIcon,
  Tablet,
  TrashIcon,
} from '../../constants/svgs';

const CustomModal = ({
  visible,
  onClose,
  medicine,
}: {
  visible: boolean;
  onClose: () => void;
  medicine: any;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity>
                <InfoIcon />
              </TouchableOpacity>
              <View style={styles.rightModalHeader}>
                <TouchableOpacity>
                  <TrashIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <EditIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
                <Tablet
                  width={horizontalScale(50)}
                  height={verticalScale(50)}
                />
                <Text style={styles.title}>
                  {medicine?.medicineName || 'NA'}
                </Text>
              </View>

              <View style={{gap: 14}}>
                <View style={styles.iconContainer}>
                  <ShoppingBagIcon />
                  <Text style={styles.desTxt}>Schedule for 8:00 pm, Today</Text>
                </View>
                <View style={styles.iconContainer}>
                  <MenuIcon />
                  <Text style={styles.desTxt}>
                    500mg, 1 Tablet after breakfast
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <ClockIcon />
                  <Text style={styles.desTxt}>
                    Last taken at 7:12pm, Mn, 18 Feb
                  </Text>
                </View>
              </View>
            </View>

            <View style={{padding: 20}}>
              <View style={styles.buttonContainer}>
                <View style={{gap: 5}}>
                  <TouchableOpacity onPress={onClose}>
                    <CLOSEICON />
                  </TouchableOpacity>
                  <Text style={styles.btntxt}>Skip</Text>
                </View>

                <View style={{gap: 5}}>
                  <TouchableOpacity>
                    <CHECKICON />
                  </TouchableOpacity>
                  <Text style={styles.btntxt}>Take</Text>
                </View>

                {/* <View style={{alignItems: 'center',gap:5}}>
                <TouchableOpacity>
                  <MySVG />
                </TouchableOpacity>
                <Text style={styles.btntxt}>Reschedule</Text>
              </View>  */}
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: horizontalScale(350),
    // padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: '100%',
    padding: 20,
    paddingBottom: 15,
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
    padding: 20,
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
    fontSize: 15,
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
    padding: 10,
    width: horizontalScale(230),
  },
  btntxt: {
    textAlign: 'center',
    color: '#00A8A8',
    fontSize: 16,
    fontWeight: '500',
  },
});
export default CustomModal;
