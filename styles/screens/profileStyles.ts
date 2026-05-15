import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width: SCREEN_W } = Dimensions.get('window');

// card padding (12×2) + screen padding (20×2) + 3 gaps (10×3)
const AVATAR_ITEM_SIZE = Math.floor((SCREEN_W - 64 - 30) / 4);

export const styles = StyleSheet.create({
    bg: { flex: 1, overflow: 'hidden' },
    safeArea: { flex: 1, overflow: 'hidden' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerArrow: {
        fontSize: 28,
        fontWeight: '900',
        color: '#b20d1d',
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    headerGear: {
        fontSize: 24,
        color: '#555',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 2,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 16,
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        padding: 16,
        alignItems: 'center',
        marginBottom: 12,
        ...Platform.select({
            web: { boxShadow: '4px 4px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 6,
            },
        }),
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 12,
    },
    avatarCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#fde8e8',
        borderWidth: 3,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '4px 4px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 5,
            },
        }),
    },
    avatarEmoji: {
        fontSize: 48,
    },
    editBtn: {
        position: 'absolute',
        bottom: 0,
        right: -4,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#fff9f1',
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '2px 2px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 3,
            },
        }),
    },
    editBtnText: {
        fontSize: 14,
    },
    fieldLabel: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
        marginBottom: 6,
    },
    nameInput: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        ...Platform.select({
            web: { boxShadow: '2px 2px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 3,
            },
        }),
    },
    galleryCard: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        padding: 12,
        marginBottom: 12,
        ...Platform.select({
            web: { boxShadow: '4px 4px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 6,
            },
        }),
    },
    galleryTitle: {
        fontSize: 15,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        marginBottom: 10,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    avatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    avatarItem: {
        width: AVATAR_ITEM_SIZE,
        height: AVATAR_ITEM_SIZE,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '2px 2px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 3,
            },
        }),
    },
    avatarItemSelected: {
        backgroundColor: '#fde8e8',
        borderColor: '#b20d1d',
        borderWidth: 3,
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #b20d1d' },
            default: {
                shadowColor: '#b20d1d',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 4,
            },
        }),
    },
    avatarItemEmoji: {
        fontSize: 28,
    },
    saveBtn: {
        width: '100%',
        height: 56,
        backgroundColor: '#fde8e8',
        borderRadius: 32,
        borderWidth: 3,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '4px 4px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 6,
            },
        }),
    },
    saveBtnText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 1,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
});
