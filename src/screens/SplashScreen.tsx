import {
    ActivityIndicator,
    ImageBackground,
    StatusBar,
    Text,
    View,
    Animated,
    StyleSheet,
} from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    getImageRequire,
    navigationStrings,
} from '../theme/theme';
import {
    moderateVerticalScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';

const SplashScreen = ({ navigation }: any) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            navigation.replace(navigationStrings.QUICKLY_LOGIN);
        }, 3000);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={getImageRequire.splash_bg}
                resizeMode="cover"
                style={styles.imgStyle}
            >
                <Animated.Image
                    source={getImageRequire.splash_main}
                    style={[styles.logoStyle, { opacity: fadeAnim }]}
                />
                <View style={styles.bottomView}>
                    <ActivityIndicator size={35} color={COLORS.DEFAULT_WHITE} />
                    <Text style={styles.nameApp}>ChatTogether</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    imgStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        width: scale(200),
        height: verticalScale(200),
    },
    bottomView: {
        position: 'absolute',
        bottom: verticalScale(40),
    },
    nameApp: {
        color: COLORS.DEFAULT_WHITE,
        fontFamily: FONTS.p_medium,
        fontSize: scale(18),
        marginTop: moderateVerticalScale(10),
    },
});
