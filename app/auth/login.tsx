import React, { useState } from 'react';
import {
    Alert,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { styles } from '../../styles/screens/loginStyles';

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
        setLoading(true);
        try {
            router.replace('/home');
        } catch {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
        } finally {
            setLoading(false);
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
                            <CustomInput
                                label="email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholder="seu@email.com"
                                accessibilityHint="Digite seu endereço de e-mail"
                            />

                            <CustomInput
                                label="Senha"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                placeholder="••••••••"
                                accessibilityHint="Digite sua senha"
                            />

                            <Text style={styles.forgotPassword}>esqueceu sua senha?</Text>

                            <CustomButton
                                title={loading ? 'Entrando...' : 'Entrar'}
                                onPress={handleLogin}
                                loading={loading}
                                style={styles.submitBtn}
                                accessibilityLabel="Entrar"
                                accessibilityHint="Toque para fazer login"
                            />

                            <TouchableOpacity
                                onPress={() => router.push('/auth/register')}
                                accessibilityLabel="Criar conta"
                                accessibilityHint="Ir para a tela de cadastro"
                            >
                                <Text style={styles.switchText}>Não tem conta? Crie agora</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
