import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/screens/homeStyles';

const bgImage = require('../../assets/TelaInicio.svg');
const logoImage = require('../../assets/Logo.svg');

export default function Home() {
    const router = useRouter();

    const handleStartChat = () => router.push('/chat/select');
    const handleAbout = () => router.push('/about');
    const handleProfile = () => router.push('/profile');
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

                    {/* Card de perfil */}
                    <TouchableOpacity
                        style={styles.profileBtn}
                        onPress={handleProfile}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.profileBtnIcon}>👤</Text>
                        <Text style={styles.profileBtnLabel}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.8}>
                        <Text style={styles.logoutBtnText}>Sair</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomPad} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
