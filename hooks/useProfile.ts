import { useState } from 'react';
import { Alert } from 'react-native';
import { AVATARS, AvatarId } from '../constants/avatars';

export function useProfile() {
    const [userName, setUserName] = useState('Usuário');
    const [selectedAvatar, setSelectedAvatar] = useState<AvatarId>('1');
    const [saving, setSaving] = useState(false);

    const currentEmoji = AVATARS.find(a => a.id === selectedAvatar)?.emoji ?? '🐱';

    const saveProfile = async () => {
        if (!userName.trim()) {
            Alert.alert('Atenção', 'O nome não pode estar vazio.');
            return;
        }
        setSaving(true);
        try {
            // Future: persist to API/storage
            await new Promise<void>(resolve => setTimeout(resolve, 400));
            Alert.alert('Salvo!', 'Perfil atualizado com sucesso.');
        } catch {
            Alert.alert('Erro', 'Não foi possível salvar seu perfil. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    return {
        userName,
        setUserName,
        selectedAvatar,
        setSelectedAvatar,
        currentEmoji,
        saving,
        saveProfile,
    };
}
