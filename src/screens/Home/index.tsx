import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomDatepicker from '../../components/customDatepicker'
import { removeData } from '../../helpers/asyncStorageHelpers'
import ProgressBar from '../../components/progressBar'
import LogInAsGuest from '../LogInAsGuest'

const Home = () => {

    return (
        <>
            <SafeAreaView />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

               
                <CustomDatepicker />
                <TouchableOpacity
                    onPress={() => removeData('accessToken')}
                    style={{
                        backgroundColor: '#007BFF',
                        padding: 10,
                        borderRadius: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#FFF', fontSize: 16 }}>Click</Text>
                </TouchableOpacity>
            </View>
            {/* <LogInAsGuest/> */}
        </>
    )
}

export default Home