import React from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { AVATARS } from '../../constants/avatars';
import { useProfile } from '../../hooks/useProfile';
import { styles } from '../../styles/screens/profileStyles';

const bgImage = require('../../assets/TelaInicio.svg');

export default function Profile() {
    const router = useRouter();
    const { userName, setUserName, selectedAvatar, setSelectedAvatar, currentEmoji, saving, saveProfile } = useProfile();

    const handleSettings = () => {
        Alert.alert('Configurações', 'Em breve.');
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
                >
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={() => router.back()}
                            accessibilityLabel="Voltar"
                            accessibilityHint="Toque para voltar à tela anterior"
                        >
                            <Text style={styles.headerArrow}>←</Text>
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Perfil</Text>

                        <TouchableOpacity
                            style={styles.headerBtn}
                            onPress={handleSettings}
                            accessibilityLabel="Configurações"
                            accessibilityHint="Toque para abrir as configurações"
                        >
                            <Text style={styles.headerGear}>⚙</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.card}>
                            <View
                                style={styles.avatarWrapper}
                                accessibilityLabel={`Avatar atual: ${currentEmoji}`}
                            >
                                <View style={styles.avatarCircle}>
                                    <Text style={styles.avatarEmoji}>{currentEmoji}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    accessibilityLabel="Editar avatar"
                                    accessibilityHint="Toque para escolher um avatar na galeria abaixo"
                                    onPress={() => {}}
                                >
                                    <Text style={styles.editBtnText}>✏</Text>
                                </TouchableOpacity>
                            </View>

                            <CustomInput
                                label="Nome"
                                value={userName}
                                onChangeText={setUserName}
                                placeholder="Seu nome de usuário"
                                maxLength={30}
                                style={styles.nameInput}
                                accessibilityLabel="Nome de usuário"
                                accessibilityHint="Digite o nome que aparecerá no chat"
                            />
                        </View>

                        <View style={styles.galleryCard}>
                            <Text style={styles.galleryTitle}>Escolha seu Avatar</Text>
                            <View style={styles.avatarGrid}>
                                {AVATARS.map((avatar) => (
                                    <TouchableOpacity
                                        key={avatar.id}
                                        style={[
                                            styles.avatarItem,
                                            selectedAvatar === avatar.id && styles.avatarItemSelected,
                                        ]}
                                        onPress={() => setSelectedAvatar(avatar.id)}
                                        activeOpacity={0.75}
                                        accessibilityLabel={`Avatar ${avatar.emoji}`}
                                        accessibilityHint="Toque para selecionar este avatar"
                                        accessibilityState={{ selected: selectedAvatar === avatar.id }}
                                    >
                                        <Text style={styles.avatarItemEmoji}>{avatar.emoji}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <CustomButton
                            title="Salvar"
                            onPress={saveProfile}
                            loading={saving}
                            variant="accent"
                            style={styles.saveBtn}
                            accessibilityLabel="Salvar perfil"
                            accessibilityHint="Toque para salvar as alterações do seu perfil"
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
