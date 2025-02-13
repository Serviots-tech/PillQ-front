import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getUserProfile } from '../../redux/actions/userAction';

type AuthContextType = {
    isAuthenticated: boolean | null;
    login: () => void;
    logout: () => void;
    isFetchProfileLoading: boolean;
    isLoggedout: boolean;
    setLogoutFalse: () => void;
    isAdditionalDataPending:boolean;
    setAdditionalDataPendingFalse:()=> void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isFetchProfileLoading, setIsFetchProfileLoading] = useState<boolean>(false);
    const [isLoggedout, setIsLoggedout] = useState<boolean>(false);
    const [isAdditionalDataPending, setIsAdditionalDataPending] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();


    const login = () => { setIsAuthenticated(true); setIsLoggedout(false); }
    const setLogoutFalse = () => { setIsLoggedout(false); }
    const logout = () => {
        setIsAuthenticated(false);
        setIsLoggedout(true);
    };
    const setAdditionalDataPendingFalse= () => { setIsAdditionalDataPending(false); }

    const fetchProfile = useCallback(async () => {
        setIsFetchProfileLoading(true);
        try {
            const res = await dispatch(getUserProfile());
            console.log("🚀 ~ fetchProfile ~ res:", res)
            if (res?.payload?.responseStatus === 200) {
                if (!res?.payload?.data?.birthday || !res?.payload?.data?.gender) {
                    setIsAdditionalDataPending(true)
                } else {
                    setIsAuthenticated(true);
                }
            } else {
                setIsAuthenticated(false);
            }
        } catch (err) {
            setIsAuthenticated(false);
        } finally {
            setIsFetchProfileLoading(false);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, logout, isFetchProfileLoading, isLoggedout, setLogoutFalse, isAdditionalDataPending, setAdditionalDataPendingFalse }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
