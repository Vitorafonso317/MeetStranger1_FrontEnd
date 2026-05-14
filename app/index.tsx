import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const BUTTON_WIDTH = SCREEN_W * 0.82;

// Logo proporcional: em telas pequenas fica menor
const LOGO_SIZE = Math.min(180, SCREEN_H * 0.22);

const bgImage = require('../assets/TelaInicio.svg');
const logoImage = require('../assets/Logo.svg');

export default function Landing() {
    const router = useRouter();

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.overlay}>

                    {/* Logo + título — ocupa o espaço do topo */}
                    <View style={styles.topRow}>
                        <Image
                            source={logoImage}
                            style={{ width: LOGO_SIZE, height: LOGO_SIZE, marginBottom: -10 }}
                            resizeMode="contain"
                        />
                        <Text style={styles.meetText}>MEET</Text>
                        <Text style={styles.strangerText}>STRANGER</Text>
                        <Text style={styles.tagline}>
                            Converse com pessoas aleatórias por temas!
                        </Text>
                    </View>

                    {/* Espaço flexível entre logo e botões */}
                    <View style={styles.spacer} />

                    {/* Botões — ancorados na base */}
                    <View style={styles.bottomRow}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => router.push('/auth/login')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.btnTextDark}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnHighlight}
                            onPress={() => router.push('/auth/register')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.btnTextRed}>Criar conta</Text>
                        </TouchableOpacity>

                        <Text style={styles.disclaimer}>
                            Ao continuar, você aceita os Termos e Política de Privacidade
                        </Text>
                    </View>

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
        paddingTop: SCREEN_H * 0.03,
        paddingBottom: SCREEN_H * 0.03,
        justifyContent: 'space-between',
    },
    spacer: { flex: 1 },
    topRow: {
        alignItems: 'center',
    },
    meetText: {
        fontSize: Math.min(64, SCREEN_W * 0.17),
        fontWeight: '900',
        color: '#b20d1d',
        textAlign: 'center',
        lineHeight: Math.min(66, SCREEN_W * 0.175),
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
        fontSize: Math.min(54, SCREEN_W * 0.144),
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        lineHeight: Math.min(58, SCREEN_W * 0.155),
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
    tagline: {
        fontSize: 13,
        fontWeight: '700',
        color: '#b20d1d',
        textAlign: 'center',
        marginTop: 8,
        fontStyle: 'italic',
        paddingHorizontal: 16,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    bottomRow: {
        alignItems: 'center',
        gap: 50,
    },
    btn: {
        width: BUTTON_WIDTH,
        height: 56,
        borderRadius: 32,
        backgroundColor: '#fff9f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000',
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 5,
            },
        }),
    },
    btnHighlight: {
        width: BUTTON_WIDTH,
        height: 56,
        borderRadius: 32,
        backgroundColor: '#fde8e8',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000',
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 5,
            },
        }),
    },
    btnTextDark: {
        fontSize: 22,
        fontWeight: '900',
        color: '#333',
        letterSpacing: 1,
    },
    btnTextRed: {
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
    disclaimer: {
        fontSize: 12,
        fontWeight: '500',
        color: '#8B4513',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
});
