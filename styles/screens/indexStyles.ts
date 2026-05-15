import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SHADOWS, TEXT_SHADOWS } from '../../constants/colors';
import { SPACING, BORDER_RADIUS, BORDER_WIDTH } from '../../constants/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/typography';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const BUTTON_WIDTH = SCREEN_W * 0.82;
const LOGO_SIZE = Math.min(180, SCREEN_H * 0.22);

export const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%', overflow: 'hidden' },
    safeArea: { flex: 1, width: '100%', overflow: 'hidden' },
    logoImage: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        marginBottom: -10,
    },
    overlay: {
        flex: 1,
        width: '100%',
        paddingHorizontal: SPACING.xxl,
        paddingTop: SCREEN_H * 0.03,
        paddingBottom: SCREEN_H * 0.03,
        justifyContent: 'space-between',
    },
    spacer: { flex: 1 },
    topRow: {
        alignItems: 'center',
    },
    meetText: {
        fontSize: Math.min(64, SCREEN_W * 0.17),
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        textAlign: 'center',
        lineHeight: Math.min(66, SCREEN_W * 0.175),
        letterSpacing: 3,
        ...TEXT_SHADOWS.lg,
    },
    strangerText: {
        fontSize: Math.min(54, SCREEN_W * 0.144),
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        textAlign: 'center',
        lineHeight: Math.min(58, SCREEN_W * 0.155),
        letterSpacing: 3,
        ...TEXT_SHADOWS.lg,
    },
    tagline: {
        fontSize: FONT_SIZE.sm,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.primary,
        textAlign: 'center',
        marginTop: SPACING.sm,
        fontStyle: 'italic',
        paddingHorizontal: SPACING.lg,
        ...TEXT_SHADOWS.sm,
    },
    bottomRow: {
        alignItems: 'center',
        gap: 50,
    },
    btn: {
        width: BUTTON_WIDTH,
        height: 56,
        borderRadius: 32,
        backgroundColor: COLORS.surface,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        ...SHADOWS.md,
    },
    btnHighlight: {
        width: BUTTON_WIDTH,
        height: 56,
        borderRadius: 32,
        backgroundColor: COLORS.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        ...SHADOWS.md,
    },
    btnTextDark: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.text,
        letterSpacing: 1,
    },
    btnTextRed: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        letterSpacing: 1,
        ...TEXT_SHADOWS.sm,
    },
    disclaimer: {
        fontSize: 12,
        fontWeight: FONT_WEIGHT.medium,
        color: COLORS.textBrown,
        textAlign: 'center',
        paddingHorizontal: SPACING.lg,
    },
});
