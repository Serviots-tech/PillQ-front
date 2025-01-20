import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { removeData } from '../../helpers/asyncStorageHelpers'
import { postApi } from '../../apis/apis'
import { setLoginStatus } from '../../redux/slices/isLoggedIn'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CombinedStackParamList } from '../../Navigation/CombineStack'
import { navigationStrings } from '../../constants/navigationStrings'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

type LogInAsGuestProps = NativeStackScreenProps<CombinedStackParamList, 'Home'>;


const Home: React.FC<LogInAsGuestProps> = ({navigation}) => {
    const dispatch = useDispatch<AppDispatch>()

    const logoutUser = async () => {
        try {
            const res = await postApi('/auth/logout')
            console.log("🚀 ~ logoutUser ~ res:", res)
            await removeData('accessToken')
            navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
            });
            dispatch(setLoginStatus(false))

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
