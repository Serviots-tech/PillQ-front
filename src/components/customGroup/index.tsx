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

const CustomGroup = ({ children }: any) => {
    const [state, setState] = useState({ open: false });

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const onStateChange = ({ open }: State) => setState({ open });

    const { open } = state;

    return (
        <>
            <PaperProvider>
                <Portal>
                    {children}
                    <FAB.Group
                        open={open}
                        visible
                        backdropColor='rgba(255, 255, 255, 0.8)'
                        fabStyle={styles?.icon}
                        icon={() => (
                            <View style={styles.iconContainer}>
                                {open ? <CloseIcon /> : <PlusIcon />}
                            </View>
                        )}
                        actions={[
                            {
                                icon: () => (<View style={{justifyContent:'center', alignItems:"center"}}><AddDoseIcon /></View> ),
                                label: 'Add Dose',
                                style: { backgroundColor: "#00A8A8" },
                                labelStyle: styles.labelText,
                                onPress: () => { navigation.navigate(navigationStrings.SEARCH_MED) },
                            },

                        ]}
                        onStateChange={onStateChange}
                    />
                </Portal>
            </PaperProvider>
        </>
    );
}

export default CustomGroup
