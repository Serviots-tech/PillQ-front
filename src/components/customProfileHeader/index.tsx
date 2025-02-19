import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { LogOutIcon, NotificationIcon } from '../../constants/svgs'
import { horizontalScale, moderateScale, verticalScale } from '../../styles'
import { postApi } from '../../apis/apis'
import { removeData } from '../../helpers/asyncStorageHelpers'
import { useAuth } from '../authContext'
import { showToast } from '../customToast/ToastManager'

const CustomProfileHeader = ({ setIsLogOutLoading }: { setIsLogOutLoading: any}) => {
    const userProfileData = useSelector((data: any) => data?.userProfile?.data)
    const { logout } = useAuth();

    const logoutUser = async () => {
        setIsLogOutLoading(true)
        try {
            const res = await postApi('/auth/logout')
            await removeData('accessToken')
            logout()

        }
        catch (error: any) {
            showToast({
                text: `${error?.response?.data?.error?.errorDescription ?? "Some thing went Wrong"}`,
                duration: 3000,
                type: 'error'
            })
        }
        finally{
            setIsLogOutLoading(false)
        }

    }

    return (
        <>
            {/* <SafeAreaView  > */}
                <View style={[styles.imgWrapper]}>
                    <View style={styles.imgContainer}>
                        <View style={styles.container}>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6?q=80&w=2924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                }}
                                style={styles.profileImage}
                            />
                        </View>
                        <Text style={styles.profileText}>{userProfileData?.name ? userProfileData?.name : ""}</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => { logoutUser() }}
                        >
                            <LogOutIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </SafeAreaView> */}
        </>
    )
}

export default CustomProfileHeader

const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: moderateScale(20),
        paddingStart: horizontalScale(8),
    },
    imgWrapper: {
        height: verticalScale(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(12),
        backgroundColor: "#F8F9FA"
    },
    container: {
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: 60,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})