import React, { useState } from 'react';
import {
    Text,
    View,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const bgImage = require('../../assets/TelaInicio.svg');

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        try {
            router.replace('/home');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
        }
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.kav}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
                >
                    <View style={styles.center}>

                        <Text style={styles.pageTitle}>LOGIN</Text>
                        <Text style={styles.pageSubtitle}>JÁ TEM UMA CONTA?</Text>
                        <View style={styles.subtitleUnderline} />

                        <View style={styles.card}>
                            <Text style={styles.fieldLabel}>email</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholder="seu@email.com"
                                placeholderTextColor="#aaa"
                            />

                            <Text style={styles.fieldLabel}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                            />

                            <Text style={styles.forgotPassword}>esqueceu sua senha?</Text>

                            <TouchableOpacity
                                style={loading ? styles.submitBtnDisabled : styles.submitBtn}
                                onPress={handleLogin}
                                disabled={loading}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.submitBtnText}>Entrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => router.push('/auth/register')}>
                                <Text style={styles.switchText}>Nao tem conta, Crie agora</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: '100%',
    },
    safeArea: {
        flex: 1,
        width: '100%',
    },
    kav: {
        flex: 1,
        width: '100%',
    },
    center: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', // <— adicionar para centralizar horizontalmente
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    pageTitle: {
        fontSize: 52,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        letterSpacing: 3,
        marginBottom: 8,
        ...Platform.select({
            web: { textShadow: '3px 3px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 0,
            },
        }),
    },
    pageSubtitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#b20d1d',
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: 8,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    subtitleUnderline: {
        height: 3,
        backgroundColor: '#b20d1d',
        width: '70%',
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 20,
        borderRadius: 2,
    },
        card: {
        width: '90%',        // ou use: width: '100%', maxWidth: 420,
        maxWidth: 420,       // opcional: limita a largura em telas grandes
        alignSelf: 'center', // centraliza o card
        backgroundColor: '#fff9f1',
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#000',
        padding: 16,
        // sombras (mesmo estilo que você já tem)
        ...Platform.select({
        web: { boxShadow: '3px 3px 0px #000' },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 6,
        },
        }),
    },
    fieldLabel: {
        fontSize: 16,
        fontWeight: '900',
        color: '#2196F3',
        marginBottom: 6,
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
    input: {
        width: '100%',
        backgroundColor: '#e8f4fb',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        marginBottom: 14,
    },
    forgotPassword: {
        fontSize: 13,
        color: '#666',
        fontWeight: '600',
        textAlign: 'right',
        marginBottom: 14,
    },
    submitBtn: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 28,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 12,
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 4,
            },
        }),
    },
    submitBtnDisabled: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 28,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 12,
        opacity: 0.5,
    },
    submitBtnText: {
        fontSize: 22,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 2,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    switchText: {
        fontSize: 13,
        color: '#8B4513',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 12,
    },
});
