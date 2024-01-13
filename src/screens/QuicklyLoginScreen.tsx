import {
    Image,
    ImageBackground,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    COLORS,
    FONTS,
    getImageRequire,
    navigationStrings,
} from '../theme/theme';
import {
    moderateScale,
    moderateVerticalScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';

const QuicklyLoginScreen = ({ navigation }: any) => {
    const navigationQuicklyLoginToLogin = () => {
        navigation.navigate(navigationStrings.LOGIN);
    };

    const navigationQuicklyLoginToRegister = () => {
        navigation.navigate(navigationStrings.REGISTER);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                source={getImageRequire.splash_bg}
                resizeMode="cover"
                style={styles.container}
            >
                <Text style={styles.h1}>
                    Kết nối bạn bè dễ dàng và nhanh chóng
                </Text>
                <Text style={styles.h4}>
                    Ứng dụng trò chuyện của chúng tôi là cách hoàn hảo để duy
                    trì kết nối với bạn bè và gia đình.
                </Text>
                <View style={styles.loginQuicklyView}>
                    <TouchableOpacity
                        style={styles.btnLoginQuickly}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={getImageRequire.facebook}
                            style={styles.imgLoginQuicklyStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLoginQuickly}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={getImageRequire.google}
                            style={styles.imgLoginQuicklyStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLoginQuickly}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={getImageRequire.instagram}
                            style={styles.imgLoginQuicklyStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.orRowView}>
                    <View style={styles.line} />
                    <Text style={styles.textOr}>HOẶC</Text>
                    <View style={styles.line} />
                </View>
                <TouchableOpacity
                    style={styles.loginWithPhoneNumber}
                    activeOpacity={0.8}
                    onPress={navigationQuicklyLoginToLogin}
                >
                    <Text style={styles.textPhoneNumber}>
                        Đăng nhập bằng SĐT
                    </Text>
                </TouchableOpacity>
                <View style={styles.registerRow}>
                    <Text style={styles.registerPhoneNumber}>
                        Bạn chưa có tài khoản?{' '}
                    </Text>
                    <Pressable onPress={navigationQuicklyLoginToRegister}>
                        <Text
                            style={[
                                styles.registerPhoneNumber,
                                styles.registerBold,
                            ]}
                        >
                            Đăng ký
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default QuicklyLoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    h1: {
        color: COLORS.DEFAULT_WHITE,
        marginTop: verticalScale(70),
        marginLeft: scale(20),
        fontSize: scale(54),
        fontFamily: FONTS.p_regular,
        lineHeight: scale(75),
    },
    h4: {
        color: COLORS.DEFAULT_WHITE,
        fontFamily: FONTS.p_regular,
        opacity: 0.5,
        marginTop: moderateVerticalScale(18),
        marginLeft: scale(20),
        fontSize: scale(14),
        lineHeight: scale(26),
    },
    loginQuicklyView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: verticalScale(20),
    },
    btnLoginQuickly: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(100),
        backgroundColor: COLORS.WHITE_OPACITY_19,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: scale(10),
    },
    imgLoginQuicklyStyle: {
        width: moderateScale(24),
        height: moderateScale(24),
    },
    orRowView: {
        flexDirection: 'row',
        marginVertical: verticalScale(25),
        alignSelf: 'center',
        alignItems: 'center',
        marginHorizontal: scale(20),
    },
    line: {
        width: '38%',
        height: scale(1),
        backgroundColor: COLORS.DEFAULT_WHITE,
        opacity: 0.2,
    },
    textOr: {
        fontSize: scale(12),
        color: COLORS.DEFAULT_WHITE,
        fontFamily: FONTS.p_black,
        marginHorizontal: moderateScale(15),
    },
    loginWithPhoneNumber: {
        height: scale(46),
        borderRadius: scale(16),
        marginHorizontal: scale(20),
        backgroundColor: COLORS.WHITE_OPACITY_37,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPhoneNumber: {
        color: COLORS.DEFAULT_WHITE,
        fontFamily: FONTS.p_medium,
        fontSize: scale(14),
    },
    registerRow: {
        flexDirection: 'row',
        marginTop: verticalScale(25),
        alignSelf: 'center',
    },
    registerPhoneNumber: {
        fontSize: scale(12),
        color: COLORS.DEFAULT_WHITE,
        fontFamily: FONTS.p_regular,
    },
    registerBold: {
        fontFamily: FONTS.p_bold,
    },
});
