import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const CARD_SIZE = Math.min((SCREEN_W - 20 * 2 - 18) / 1, SCREEN_H * 0.18);

const bgImage = require('../../assets/TelaInicio.svg');
const logoImage = require('../../assets/Logo.svg');

export default function Home() {
    const router = useRouter();

    const handleStartChat = () => router.push('/chat/select');
    const handleAbout = () => router.push('/about');
    const handleLogout = () => router.replace('/auth/login');

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.overlay}>

                    {/* Logo + título */}
                    <View style={styles.topRow}>
                        <Image source={logoImage} style={styles.logoImage} resizeMode="contain" />
                        <Text style={styles.meetText}>MEET</Text>
                        <Text style={styles.strangerText}>STRANGER</Text>
                    </View>

                    <View style={styles.spacer} />

                    {/* Botões quadrados */}
                    <View style={styles.mainButtons}>
                        <TouchableOpacity
                            style={styles.squareBtn}
                            onPress={handleStartChat}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.squareBtnLabelBlue}>Chat</Text>
                            <Text style={styles.squareBtnIcon}>💬</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.squareBtn}
                            onPress={handleAbout}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.squareBtnLabelRed}>Sobre</Text>
                            <Text style={styles.squareBtnIcon}>❓</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.8}>
                        <Text style={styles.logoutBtnText}>Sair</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomPad} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%' },
    safeArea: { flex: 1, width: '100%' },
    overlay: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: SCREEN_H * 0.04,
        alignItems: 'center',
    },
    spacer: { flex: 0.55 },
        topRow: {
        alignItems: 'center',
        marginTop: 10,
    },
    logoImage: {
        width: Math.min(180, SCREEN_H * 0.22),
        height: Math.min(180, SCREEN_H * 0.22),
        marginBottom: 0,
    },
    meetText: {
        fontSize: 56,
        fontWeight: '900',
        color: '#b20d1d',
        textAlign: 'center',
        lineHeight: 58,
        letterSpacing: 3,
        ...Platform.select({
            web: { textShadow: '3px 3px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 0,
            },
        }),
    },
    strangerText: {
        fontSize: 46,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        lineHeight: 50,
        letterSpacing: 3,
        ...Platform.select({
            web: { textShadow: '3px 3px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 0,
            },
        }),
    },
      mainButtons: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBtn: {
        width: CARD_SIZE,
        height: CARD_SIZE,
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: {
                boxShadow: '6px 6px 0px #000',
            },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 5, height: 5 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
            },
        }),
    },
    squareBtnLabelBlue: {
        fontSize: 22,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 1,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    squareBtnLabelRed: {
        fontSize: 22,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 1,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    squareBtnIcon: {
        fontSize: 40,
    },
        logoutBtn: {
        paddingHorizontal: 42,
        paddingVertical: 12,
        backgroundColor: '#fff9f1',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#000',
        ...Platform.select({
            web: {
                boxShadow: '4px 4px 0px #000',
            },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 5,
            },
        }),
    },
    logoutBtnText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#666',
    },
    bottomPad: { height: SCREEN_H * 0.04 },
});
