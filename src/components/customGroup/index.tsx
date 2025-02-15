import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { AddDoseIcon, CloseIcon, PlusIcon } from '../../constants/svgs';
import { horizontalScale, verticalScale } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/Routes';
import { navigationStrings } from '../../constants/navigationStrings';
import styles from './style';

type State = {
    open: boolean;
};

const CustomGroup = () => {
    const [state, setState] =useState({ open: false });

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const onStateChange = ({ open }: State) => setState({ open });

    const { open } = state;

    return (
        <PaperProvider>
            <Portal>
                <FAB.Group
                    open={open}
                    visible
                    fabStyle={styles?.icon}
                    icon={() => (
                        <View style={styles.iconContainer}>
                            {open ? <CloseIcon color={"#F5F5F5"} width={18} /> : <PlusIcon />}
                        </View>
                    )}
                    actions={[
                        {
                            icon: () => <AddDoseIcon/>,
                            label: 'Add Dose',
                            style: { width: horizontalScale(40), height:verticalScale(40), backgroundColor:"#00A8A8"},
                            labelStyle: styles.labelText,
                            onPress: () => { navigation .navigate(navigationStrings.SEARCH_MED)},
                        },
                        
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                           
                        }
                    }}
                />
            </Portal>
        </PaperProvider>
    );
}

export default CustomGroup
