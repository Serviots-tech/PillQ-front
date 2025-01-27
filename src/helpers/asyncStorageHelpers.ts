import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("🚀 ~ storeData ~ error:", error)
    }
};

export const retrieveData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value); // Parse and return the value
        } else {
            return null;
        }
    } catch (error) {
        console.log("🚀 ~ retrieveData ~ error:", error)
    }
};

export const removeData = async (key:string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("🚀 ~ removeData ~ error:", error)
    }
};