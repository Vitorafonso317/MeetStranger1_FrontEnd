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
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const bgImage = require('../../assets/TelaInicio.svg');

export default function Register() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem. Tente novamente.');
            return;
        }
        try {
            router.replace('/home');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar registrar. Tente novamente.');
        }
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.flex}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
                >
                    {/* Register tem 4 campos — precisa de scroll em telas pequenas */}
                    <ScrollView
                        contentContainerStyle={styles.scroll}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        overScrollMode="never"
                    >
                        {/* Título */}
                        <Text style={styles.pageTitle}>REGISTER</Text>
                        <Text style={styles.pageSubtitle}>CRIE SUA CONTA!!</Text>
                        <View style={styles.subtitleUnderline} />

                        {/* Card formulário */}
                        <View style={styles.card}>
                            <Text style={styles.fieldLabel}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Seu nome de usuário"
                                placeholderTextColor="#aaa"
                            />

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

                            <Text style={styles.fieldLabel}>Confirmar senha</Text>
                            <TextInput
                                style={styles.input}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                            />

                            <TouchableOpacity
                                style={loading ? styles.submitBtnDisabled : styles.submitBtn}
                                onPress={handleRegister}
                                disabled={loading}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.submitBtnText}>
                                    {loading ? 'Registrando...' : 'Entrar'}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => router.push('/auth/login')}>
                                <Text style={styles.switchText}>Já tem conta? Faça login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
    flex: {
        flex: 1,
        width: '100%',
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    pageTitle: {
        fontSize: 48,
        fontWeight: '900',
        color: '#b20d1d',
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
        color: '#2196F3',
        textAlign: 'center',
        letterSpacing: 2,
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
        backgroundColor: '#2196F3',
        width: '70%',
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 20,
        borderRadius: 2,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#000',
        padding: 16,
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
        backgroundColor: '#e8f4fb',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 14,
        paddingVertical: 11,
        fontSize: 15,
        color: '#333',
        marginBottom: 10,
    },
    submitBtn: {
        backgroundColor: '#fff9f1',
        borderRadius: 28,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 13,
        alignItems: 'center',
        marginTop: 8,
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
        backgroundColor: '#fff9f1',
        borderRadius: 28,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 13,
        alignItems: 'center',
        marginTop: 8,
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
