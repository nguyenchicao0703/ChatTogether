import React from 'react';
import { navigationStrings } from '../theme/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
