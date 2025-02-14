import axios from 'axios';
import { ANDROID_API_URL, IOS_API_URL, MED_API_URL } from '@env';
import { Platform } from 'react-native';
import { retrieveData, storeData } from '../helpers/asyncStorageHelpers';
const endPoint = Platform.OS === 'ios' ? IOS_API_URL : ANDROID_API_URL
console.log("🚀 ~ ANDROID_API_URL:", ANDROID_API_URL)
console.log("🚀 ~ IOS_API_URL:", IOS_API_URL)


const apiConfig = async (flag = false) => {
	const getAccessToken = await retrieveData('accessToken')
	if (await getAccessToken) {
		return {
			headers: {
				Authorization: `bearer ${getAccessToken}`,
				'Content-Type': flag
					? 'multipart/form-data'
					: 'application/json',
			},
			method: 'PUT,DELETE,POST,GET,OPTION',
		};
	}
	return { withCredentials: false };
};
console.log("🚀 ~ IOS_API_URL:", IOS_API_URL)


// Response Interceptor
axios.interceptors.response.use(
	(response) => {
		// Check if the response contains the new access token in headers
		const newAccessToken = response.headers['x-new-access-token'];
		if (newAccessToken) {
			storeData('accessToke', newAccessToken)
		}
		return response;
	},
	(error: any) => {
		if (error.response && error.response.status === 401) {
			console.log('Unauthorized: Invalid or expired token.');
		}
		return Promise.reject(error);
	}
);


export const getApi = async (url?: string, params?: any) => {
	const config = await apiConfig();
	return axios.get(`${endPoint}${url}`, {
		params: params,
		...config,
	});
};

export const postApi = async (url: string, apiData?: any, flag?: boolean) => {
	return axios.post(`${endPoint}${url}`, apiData, await apiConfig(flag));
};

export const putApi = async (url: string, apiData: any, flag?: boolean) => {
	return axios.put(`${endPoint}${url}`, apiData, await apiConfig(flag));
};

export const deleteApi = async (url: string) => {
	return axios.delete(`${endPoint}${url}`, await apiConfig());
};

export const deleteApiWithData = async (url: string, apiData?: any) => {
	return axios.delete(`${endPoint}${url}`, {
		data: apiData,
		...apiConfig(),
	});
};

export const putApiNoHeader = async (url: string, apiData: any) => {
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


export const MedApi = (url?: string, params?: any)=>{
	return  axios.get(`${MED_API_URL}${url}`);
}