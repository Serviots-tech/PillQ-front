import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { AddDoseIcon, CloseIcon, PlusIcon } from '../../constants/svgs';
import { horizontalScale, verticalScale } from '../../styles';

type State = {
    open: boolean;
};

const CustomGroup = () => {
    const [state, setState] =useState({ open: false });

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
                            {open ? <CloseIcon /> : <PlusIcon />}
                        </View>
                    )}
                    actions={[
                        {
                            icon: () => <AddDoseIcon/>,
                            label: 'Add Dose',
                            style: { width: horizontalScale(40), height:verticalScale(40), backgroundColor:"#00A8A8"},
                            labelStyle: styles.labelText,
                            onPress: () => console.log('Pressed star'),
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