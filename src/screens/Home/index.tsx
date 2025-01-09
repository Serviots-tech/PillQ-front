import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomDatepicker from '../../components/customDatepicker'

const Home = () => {
    return (
        <>
            <SafeAreaView />
            <View>
                <CustomDatepicker />
            </View>
        </>
    )
}

export default Home