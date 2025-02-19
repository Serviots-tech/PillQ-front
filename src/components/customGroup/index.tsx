import { View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { AddDoseIcon, CloseIcon, PlusIcon } from '../../constants/svgs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/Routes';
import { navigationStrings } from '../../constants/navigationStrings';
import styles from './style';


const CustomGroup = ({ children, onStateChange,isOpen=false }: any) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const plusIcon = useMemo(() => <PlusIcon />, []);
    const closeIcon = useMemo(() => <CloseIcon />, []);
    const renderIcon = useCallback(() => (
        <View style={styles.iconContainer}>
            {isOpen ? closeIcon : plusIcon}
        </View>
    ), [isOpen, closeIcon, plusIcon]);

    return (
        <>
            <PaperProvider>
                <Portal>
                    {children}
                    <FAB.Group
                        open={isOpen}
                        visible
                        backdropColor='rgba(255, 255, 255, 0.8)'
                        fabStyle={styles?.icon}
                        icon={renderIcon}
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
