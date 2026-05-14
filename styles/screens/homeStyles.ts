// Estilos do Home foram migrados para inline no componente app/home/index.tsx
// Este arquivo é mantido para compatibilidade
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const homeStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: { alignItems: 'center', paddingTop: 40 },
    logo: { width: 120, height: 120 },
    welcome: { fontSize: 20, fontWeight: '700', color: colors.primary },
    subTitle: { fontSize: 14, color: colors.textSecondary },
    content: { flex: 1 },
    Card: { backgroundColor: colors.surface, padding: 16, borderRadius: 12, marginBottom: 16 },
    cardTitle: { fontSize: 18, fontWeight: '700', color: colors.primary },
    cardDescription: { fontSize: 14, color: colors.textSecondary },
    feature: { alignItems: 'center' },
    featureIcon: { fontSize: 28 },
    featureText: { fontSize: 14, color: colors.primary },
    Buttons: { paddingBottom: 32 },
    button: { marginBottom: 8 },
});
