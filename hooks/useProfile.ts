import { useState } from 'react';
import { Alert } from 'react-native';
import { AVATARS, AvatarId } from '../constants/avatars';

export function useProfile() {
    const [userName, setUserName] = useState('Usuário');
    const [selectedAvatar, setSelectedAvatar] = useState<AvatarId>('15');
    const [saving, setSaving] = useState(false);

    const currentSource = AVATARS.find(a => a.id === selectedAvatar)?.source ?? AVATARS[0].source;

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
        currentSource,
        saving,
        saveProfile,
    };
}
