interface Color {
    DEFAULT_WHITE: string;
    DEFAULT_BLACK: string;
    DEFAULT_GRAY: string;
    PRIMARY_COLOR: string;
    BRIGHT_RED: string;
    LIGHT_BLUE: string;
    LIGHT_WHITE: string;
    WHITE_OPACITY_19: string;
    WHITE_OPACITY_37: string;
}

export const COLORS: Color = {
    DEFAULT_WHITE: '#FFFFFF',
    DEFAULT_BLACK: '#000000',
    DEFAULT_GRAY: '#797C7B',
    PRIMARY_COLOR: '#3D4A7A',
    BRIGHT_RED: '#FF2D1B',
    LIGHT_BLUE: '#F2F7FB',
    LIGHT_WHITE: '#F3F6F6',
    WHITE_OPACITY_19: 'rgba(255, 255, 255, 0.19)',
    WHITE_OPACITY_37: 'rgba(255, 255, 255, 0.37)',
};

interface Font {
    p_black: string;
    p_bold: string;
    p_light: string;
    p_medium: string;
    p_regular: string;
    p_semiBold: string;
}

export const FONTS: Font = {
    p_black: 'Poppins-Black',
    p_bold: 'Poppins-Bold',
    p_light: 'Poppins-Light',
    p_medium: 'Poppins-Medium',
    p_regular: 'Poppins-Regular',
    p_semiBold: 'Poppins-SemiBold',
};

interface Image {
    back: any;
    button_bg: any;
    message: any;
    notification: any;
    search: any;
    settings: any;
    splash_bg: any;
    splash_main: any;
    trash: any;
    user: any;
    facebook: any;
    google: any;
    instagram: any;
}

export const getImageRequire: Image = {
    back: require('../assets/images/back.png'),
    button_bg: require('../assets/images/button_bg.png'),
    message: require('../assets/images/message.png'),
    notification: require('../assets/images/notification.png'),
    search: require('../assets/images/search.png'),
    settings: require('../assets/images/settings.png'),
    splash_bg: require('../assets/images/splash_bg.jpg'),
    splash_main: require('../assets/images/splash_main.png'),
    trash: require('../assets/images/trash.png'),
    user: require('../assets/images/user.png'),
    facebook: require('../assets/images/facebook.png'),
    google: require('../assets/images/google.png'),
    instagram: require('../assets/images/instagram.png'),
};

interface Navigation {
    SPLASH: string;
    QUICKLY_LOGIN: string;
    LOGIN: string;
    REGISTER: string;
    AUTHENTICATION: string;
    HOME: string;
    CHAT: string;
    PROFILE: string;
    TAB_ROUTES: string;
}

export const navigationStrings: Navigation = {
    SPLASH: 'Splash',
    QUICKLY_LOGIN: 'QuicklyLogin',
    LOGIN: 'Login',
    REGISTER: 'Register',
    AUTHENTICATION: 'Authentication',
    HOME: 'Home',
    CHAT: 'Chat',
    PROFILE: 'Profile',
    TAB_ROUTES: 'TabRoutes',
};
