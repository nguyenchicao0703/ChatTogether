import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { Context } from '../utils/Context';
import HomeStack from './HomeStack';

export default function Routes() {
    const { isLogin } = useContext(Context);

    return (
        <NavigationContainer>
            {!isLogin ? AuthStack() : HomeStack()}
        </NavigationContainer>
    );
}
