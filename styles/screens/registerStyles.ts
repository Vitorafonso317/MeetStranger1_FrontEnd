// Estilos do Register foram migrados para inline no componente app/auth/register.tsx
// Este arquivo é mantido para compatibilidade
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const registerStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center' },
    logo: { width: 120, height: 120 },
    title: { fontSize: 32, fontWeight: '900', color: colors.red, textAlign: 'center' },
    subtitle: { fontSize: 16, color: colors.textSecondary, textAlign: 'center' },
    inputContainer: { width: '100%' },
    registerButton: { marginTop: 16 },
});
