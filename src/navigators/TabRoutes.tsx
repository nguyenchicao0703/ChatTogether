import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from '../screens';
import { navigationStrings } from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={navigationStrings.HOME} component={HomeScreen} />
            <Tab.Screen
                name={navigationStrings.PROFILE}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};

export default TabRoutes;
