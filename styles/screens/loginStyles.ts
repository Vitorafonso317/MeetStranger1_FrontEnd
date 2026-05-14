// Estilos do Login foram migrados para inline no componente app/auth/login.tsx
// Este arquivo é mantido para compatibilidade
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const loginStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center' },
    logo: { width: 240, height: 240 },
    inputContainer: { width: '100%' },
    title: { fontSize: 48, fontWeight: '900', color: colors.primary, textAlign: 'center' },
    subtitle: { fontSize: 16, color: colors.textSecondary, textAlign: 'center' },
    loginButton: { marginTop: 16 },
});
