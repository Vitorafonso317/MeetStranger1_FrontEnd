import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SHADOWS, TEXT_SHADOWS } from '../../constants/colors';
import { SPACING, BORDER_RADIUS, BORDER_WIDTH } from '../../constants/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/typography';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
export const CARD_SIZE = Math.min((SCREEN_W - 20 * 2 - 18) / 1, SCREEN_H * 0.18);

export const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%', overflow: 'hidden' },
    safeArea: { flex: 1, width: '100%', overflow: 'hidden' },
    overlay: {
        flex: 1,
        width: '100%',
        paddingHorizontal: SPACING.xxl,
        paddingTop: SCREEN_H * 0.04,
        alignItems: 'center',
    },
    spacer: { flex: 0.55 },
    topRow: {
        alignItems: 'center',
        marginTop: 10,
    },
    logoImage: {
        width: Math.min(180, SCREEN_H * 0.22),
        height: Math.min(180, SCREEN_H * 0.22),
        marginBottom: 0,
    },
    meetText: {
        fontSize: FONT_SIZE.display,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        textAlign: 'center',
        lineHeight: 58,
        letterSpacing: 3,
        ...TEXT_SHADOWS.lg,
    },
    strangerText: {
        fontSize: 46,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        textAlign: 'center',
        lineHeight: 50,
        letterSpacing: 3,
        ...TEXT_SHADOWS.lg,
    },
    mainButtons: {
        flexDirection: 'row',
        gap: SPACING.xl,
        marginBottom: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBtn: {
        width: CARD_SIZE,
        height: CARD_SIZE,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.xl,
    },
    squareBtnLabelBlue: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        letterSpacing: 1,
        ...TEXT_SHADOWS.sm,
    },
    squareBtnLabelRed: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        letterSpacing: 1,
        ...TEXT_SHADOWS.sm,
    },
    squareBtnIcon: {
        fontSize: 40,
    },
    profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        paddingVertical: 14,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        marginBottom: 18,
        ...SHADOWS.xl,
    },
    profileBtnIcon: {
        fontSize: 32,
    },
    profileBtnLabel: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        letterSpacing: 1,
        ...TEXT_SHADOWS.sm,
    },
    logoutBtn: {
        paddingHorizontal: 42,
        paddingVertical: SPACING.md,
        backgroundColor: COLORS.surface,
        borderRadius: 30,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        ...SHADOWS.lg,
    },
    logoutBtnText: {
        fontSize: FONT_SIZE.md,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.textMuted,
    },
    bottomPad: { height: SCREEN_H * 0.04 },
});
