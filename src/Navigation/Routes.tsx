import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { retrieveData } from '../helpers/asyncStorageHelpers';

export default function Routes() {

  const isLoggedIn = () => {
    const getAccessToken = retrieveData('accessToken')
    console.log("🚀 ~ isLoggedIn ~ getAccessToken:", getAccessToken)



  }

  return (
    <NavigationContainer >
      {true ? <MainStack /> : <AuthStack />}


    </NavigationContainer>
  );
}