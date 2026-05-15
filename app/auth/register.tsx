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
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { COLORS } from '../../constants/colors';
import { styles } from '../../styles/screens/registerStyles';

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
        setLoading(true);
        try {
            router.replace('/home');
        } catch {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar registrar. Tente novamente.');
        } finally {
            setLoading(false);
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
                    <View style={styles.content}>
                        <Text style={styles.pageTitle}>REGISTER</Text>
                        <Text style={styles.pageSubtitle}>CRIE SUA CONTA!!</Text>
                        <View style={styles.subtitleUnderline} />

                        <View style={styles.card}>
                            <CustomInput
                                label="Nome"
                                value={name}
                                onChangeText={setName}
                                placeholder="Seu nome de usuário"
                                accessibilityHint="Digite seu nome de usuário"
                            />

                            <CustomInput
                                label="Email"
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
                                accessibilityHint="Digite uma senha"
                            />

                            <CustomInput
                                label="Confirmar senha"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                                placeholder="••••••••"
                                accessibilityHint="Repita a senha digitada"
                            />

                            <CustomButton
                                title="Criar conta"
                                onPress={handleRegister}
                                loading={loading}
                                style={styles.submitBtn}
                                accessibilityLabel="Criar conta"
                                accessibilityHint="Toque para criar sua conta"
                            />

                            <TouchableOpacity
                                onPress={() => router.push('/auth/login')}
                                accessibilityLabel="Fazer login"
                                accessibilityHint="Ir para a tela de login"
                            >
                                <Text style={styles.switchText}>Já tem conta? Faça login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => router.push('/')} // Adjusted to navigate to the app's initial screen
                                accessibilityLabel="Voltar para a tela inicial"
                                accessibilityHint="Toque para voltar para a tela inicial do aplicativo"
                                style={styles.backArrow}
                            >
                                <Ionicons name="arrow-back" size={22} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
