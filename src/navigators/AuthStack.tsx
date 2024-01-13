import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    AuthenticationScreen,
    ChatScreen,
    HomeScreen,
    LoginScreen,
    ProfileScreen,
    QuicklyLoginScreen,
    RegisterScreen,
    SplashScreen,
} from '../screens';
import { navigationStrings } from '../theme/theme';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName={navigationStrings.SPLASH}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={navigationStrings.SPLASH}
                component={SplashScreen}
            />
            <Stack.Screen
                name={navigationStrings.QUICKLY_LOGIN}
                component={QuicklyLoginScreen}
            />
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={navigationStrings.REGISTER}
                component={RegisterScreen}
            />
            <Stack.Screen
                name={navigationStrings.AUTHENTICATION}
                component={AuthenticationScreen}
            />
            <Stack.Screen
                name={navigationStrings.HOME}
                component={HomeScreen}
            />
            <Stack.Screen
                name={navigationStrings.CHAT}
                component={ChatScreen}
            />
            <Stack.Screen
                name={navigationStrings.PROFILE}
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
}
