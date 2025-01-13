import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving data:', error);
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
        console.error('Error retrieving data:', error);
    }
};

export const removeData = async (key:string) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log(`Data with key "${key}" removed.`);
    } catch (error) {
        console.error("Error removing data:", error);
    }
};