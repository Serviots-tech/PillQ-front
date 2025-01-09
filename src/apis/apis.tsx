import axios from 'axios';
import { ANDROID_API_URL, IOS_API_URL } from '@env';
import { Platform } from 'react-native';
import { retrieveData, storeData } from '../helpers/asyncStorageHelpers';

const endPoint = Platform.OS === 'ios' ? IOS_API_URL : ANDROID_API_URL


const apiConfig = (flag = false) => {
	const getAccessToken = retrieveData('accessToken')
	const getRefreshToken = retrieveData('accessToken')
	const getDeviceId = retrieveData('accessToken')
	
	if (flag) {
		if (getAccessToken && getRefreshToken && getDeviceId) {
			return {
				headers: {
					Authorization: `bearer ${getAccessToken}`,
					'x-refresh-token': `${getRefreshToken}`,
					'x-device-id': `${getDeviceId}`,
					'Content-Type': flag
						? 'multipart/form-data'
						: 'application/json',
				},
				method: 'PUT,DELETE,POST,GET,OPTION',
			};
		}
	}
	return { withCredentials: false };
};


// Response Interceptor
axios.interceptors.response.use(
	(response) => {
		// Check if the response contains the new access token in headers
		const newAccessToken = response.headers['x-new-access-token'];
		if (newAccessToken) {
			console.log('New access token received:', newAccessToken);
			storeData('accessToke', newAccessToken)
		}
		return response;
	},
	(error: any) => {
		// Handle response errors
		if (error.response && error.response.status === 401) {
			console.error('Unauthorized: Invalid or expired token.');
		}
		return Promise.reject(error);
	}
);


export const getApi = (url?: string, params?: any) => {
	return axios.get(`${endPoint}${url}`, {
		params: params,
		...apiConfig(),
	});
};

export const postApi = (url: string, apiData?: any, flag?: boolean) => {
	return axios.post(`${endPoint}${url}`, apiData, apiConfig(flag));
};

export const putApi = (url: string, apiData: any, flag?: boolean) => {
	return axios.put(`${endPoint}${url}`, apiData, apiConfig(flag));
};

export const deleteApi = (url: string) => {
	return axios.delete(`${endPoint}${url}`, apiConfig());
};

export const deleteApiWithData = (url: string, apiData?: any) => {
	return axios.delete(`${endPoint}${url}`, {
		data: apiData,
		...apiConfig(),
	});
};

export const putApiNoHeader = (url: string, apiData: any) => {
	if (localStorage.getItem('accessToken')) {
		return axios.put(`${endPoint}${url}`, apiData, {
			headers: {
				Authorization: `bearer ${localStorage.getItem('accessToken')}`,
			},
		});
	} else {
		// If there's no access token, return an error response or handle it as needed.
		return Promise.reject('No access token available');
	}
};

export const getApiExcel = async (url?: string, params?: any) => {
	const configData = await apiConfig();
	return axios.get(`${endPoint}${url}`, {
		params: params,
		responseType: 'arraybuffer',
		...configData,
	});
};

export const getApiPDF = async (url?: string, params?: any) => {
	const configData: any = await apiConfig();
	configData.headers['responseType'] = 'blob';
	return axios.get(`${endPoint}${url}`, {
		params: params,
		...configData,
	});
};

export const getApiCSV = async (url?: string, params?: any) => {
	const configData = await apiConfig();
	return axios.get(`${endPoint}${url}`, {
		params: params,
		responseType: 'arraybuffer',
		...configData,
	});
};
