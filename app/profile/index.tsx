import React from 'react';
import {
    Image,
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
import { AVATARS } from '../../constants/avatars';
import { useProfile } from '../../hooks/useProfile';
import { COLORS } from '../../constants/colors';
import { styles } from '../../styles/screens/profileStyles';

const bgImage = require('../../assets/TelaInicio.svg');

export default function Profile() {
    const router = useRouter();
    const { userName, setUserName, selectedAvatar, setSelectedAvatar, currentSource, saving, saveProfile } = useProfile();

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
                            <Ionicons name="arrow-back" size={28} color={COLORS.primary} />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Perfil</Text>

                        <View style={styles.headerBtn} />
                    </View>

                    <View style={styles.content}>
                        <View style={styles.card}>
                            <View style={styles.avatarWrapper} accessibilityLabel="Avatar atual">
                                <View style={styles.avatarCircle}>
                                    <Image source={currentSource} style={styles.avatarImage} />
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
                                        accessibilityLabel={`Avatar ${avatar.id}`}
                                        accessibilityHint="Toque para selecionar este avatar"
                                        accessibilityState={{ selected: selectedAvatar === avatar.id }}
                                    >
                                        <Image source={avatar.source} style={styles.avatarItemImage} />
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
