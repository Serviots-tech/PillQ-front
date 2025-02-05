import {jwtDecode} from 'jwt-decode';

interface CustomJwtPayload {
    deviceId: string;
    email: string;
    exp: number;
    iat: number;
    id: string;
}

export const getValueFromAcessToken = (token: string) => {
    const decoded = jwtDecode < CustomJwtPayload>(token);
    console.log('Decoded JWT:', decoded);
    return decoded
}