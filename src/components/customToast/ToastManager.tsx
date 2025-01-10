import { StyleSheet, Text, View } from 'react-native'
import React, { createRef, ReactNode } from 'react'
import CustomToastTimer, { ToastConfig, ToastRef } from '.'


const toastRef = createRef<ToastRef>()

export const showToast = (config: ToastConfig) => {
    toastRef.current?.show(config)
}


export const ToastProvider = ({ children }: { children: ReactNode }) => (
    <>
        {children}
        <CustomToastTimer ref={toastRef} />
    </>
)