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
import { horizontalScale, verticalScale } from '../../styles';
import styles from './style';
import { capitalizeFirstLetter } from '../../helpers/helper';

const CustomModal = ({
  visible,
  onClose,
  medicine,
  handleSkipTake
}: {
  visible: boolean;
  onClose: () => void;
  medicine: any;
  handleSkipTake: any
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
                style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <Tablet
                  width={horizontalScale(50)}
                  height={verticalScale(50)}
                />
                <Text style={styles.title}>
                  {medicine?.medicineName || 'NA'}
                </Text>
              </View>
              {/* {medicine?.status !== "SCHEDULED" && <Text style={{ color: medicine?.status === "MISSED" ? "red" : medicine?.status === "SKIPPED" ? "gray" : medicine?.status === "TAKEN" ? "green" : "black" }}>
                {medicine?.status === "MISSED" ? "Missed!!" : medicine?.status === "TAKEN" ? `Taken at ${medicine?.scheduleTime}` : capitalizeFirstLetter(medicine?.status)}
              </Text>} */}
              <View style={{ gap: 10 }}>
                <View style={styles.iconContainer}>
                  <ShoppingBagIcon />
                  <Text style={styles.desTxt}>Schedule for {medicine?.scheduleTime}, Today</Text>
                </View>
                <View style={styles.iconContainer}>
                  <MenuIcon />
                  <Text style={styles.desTxt}>
                    {medicine?.medicineForm}
                  </Text>
                </View>
                {/* <View style={styles.iconContainer}>
                  <ClockIcon />
                  <Text style={styles.desTxt}>
                    Last taken at 7:12pm, Mn, 18 Feb
                  </Text>
                </View> */}
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <View style={styles.buttonContainer}>
                {medicine?.status !== "SKIPPED" && <View style={{ gap: 5 }}>
                  <TouchableOpacity onPress={() => { handleSkipTake("SKIPPED") }}>
                    <CLOSEICON />
                    <Text style={styles.btntxt}>Skip</Text>
                  </TouchableOpacity>
                </View>
                }
                {medicine?.status === "SKIPPED" && <View style={{ gap: 5 }}>
                  <TouchableOpacity onPress={() => { handleSkipTake("MISSED") }}>
                    <CLOSEICON />
                    <Text style={styles.btntxt}>Un-Skip</Text>
                  </TouchableOpacity>
                </View>
                }

                {medicine?.status !== "TAKEN" && <View style={{ gap: 5 }}>
                  <TouchableOpacity onPress={() => { handleSkipTake("TAKEN") }}>
                    <CHECKICON />
                    <Text style={styles.btntxt}>Take</Text>
                  </TouchableOpacity>
                </View>}

                {medicine?.status === "TAKEN" && <View style={{ gap: 5 }}>
                  <TouchableOpacity onPress={() => { handleSkipTake("MISSED") }}>
                    <CHECKICON />
                    <Text style={styles.btntxt}>Un-Take</Text>
                  </TouchableOpacity>
                </View>}
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

export default CustomModal;
