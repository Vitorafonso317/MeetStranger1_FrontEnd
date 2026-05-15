import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { styles } from '../styles/screens/indexStyles';

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
                            style={styles.logoImage}
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
