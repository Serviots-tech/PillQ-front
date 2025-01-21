import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { removeData } from '../../helpers/asyncStorageHelpers'
import { postApi } from '../../apis/apis'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../Navigation/Routes'

import { useAuth } from '../../components/authContext'

type LogInAsGuestProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


const Home: React.FC<LogInAsGuestProps> = ({navigation}) => {
        const { logout } = useAuth();

    const logoutUser = async () => {
        try {
            const res = await postApi('/auth/logout')
            await removeData('accessToken')
            logout()

        }
        catch (error: any) {
        console.log("🚀 ~ logoutUser ~ error:", JSON.stringify(error))
        }

    }
    return (
        <>
            <SafeAreaView />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text> Home Screen</Text>

                <TouchableOpacity
                    onPress={() => { logoutUser() }}
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
