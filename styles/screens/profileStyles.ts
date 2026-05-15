import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SHADOWS, TEXT_SHADOWS } from '../../constants/colors';
import { SPACING, BORDER_RADIUS, BORDER_WIDTH } from '../../constants/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/typography';

const { width: SCREEN_W } = Dimensions.get('window');
const AVATAR_ITEM_SIZE = Math.floor((SCREEN_W - 64 - 30) / 4);

export const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%', height: '100%', overflow: 'hidden' },
    safeArea: { flex: 1, overflow: 'hidden' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
    },
    headerBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerArrow: {
        fontSize: FONT_SIZE.h3,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.primary,
        ...TEXT_SHADOWS.md,
    },
    headerGear: {
        fontSize: FONT_SIZE.h3,
        color: COLORS.textSecondary,
    },
    headerTitle: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        letterSpacing: 2,
        ...TEXT_SHADOWS.md,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.xl,
        paddingBottom: SPACING.lg,
        paddingTop: SPACING.xs,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        padding: SPACING.lg,
        alignItems: 'center',
        marginBottom: SPACING.md,
        ...SHADOWS.lg,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: SPACING.md,
    },
    avatarCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: COLORS.primaryLight,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.lg,
    },
    avatarImage: {
        width: 66,
        height: 66,
        borderRadius: 33,
    },
    editBtn: {
        position: 'absolute',
        bottom: 0,
        right: -4,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: COLORS.surface,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.sm,
    },
    editBtnText: {
        fontSize: FONT_SIZE.sm + 1,
    },
    nameInput: {
        width: '100%',
        marginBottom: 0,
    },
    galleryCard: {
        width: '100%',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.xl,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        ...SHADOWS.lg,
    },
    galleryTitle: {
        fontSize: FONT_SIZE.base,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        textAlign: 'center',
        marginBottom: SPACING.md,
        ...TEXT_SHADOWS.sm,
    },
    avatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    avatarItem: {
        width: AVATAR_ITEM_SIZE,
        height: AVATAR_ITEM_SIZE,
        backgroundColor: COLORS.white,
        borderRadius: BORDER_RADIUS.md,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.sm,
    },
    avatarItemSelected: {
        backgroundColor: COLORS.primaryLight,
        borderColor: COLORS.primary,
        borderWidth: BORDER_WIDTH.regular,
        ...SHADOWS.md,
    },
    avatarItemImage: {
        width: AVATAR_ITEM_SIZE - 16,
        height: AVATAR_ITEM_SIZE - 16,
        borderRadius: (AVATAR_ITEM_SIZE - 16) / 2,
    },
    saveBtn: {
        width: '100%',
        height: 56,
        borderRadius: BORDER_RADIUS.xxl,
    },
});
