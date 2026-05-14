// Estilos do ChatRoom foram migrados para inline no componente app/chat/room.tsx
// Este arquivo é mantido para compatibilidade
import { StyleSheet } from 'react-native';

export const chatRoomStyles = StyleSheet.create({
    container: { flex: 1 },
    header: { flexDirection: 'row', alignItems: 'center' },
    headerButton: { padding: 8 },
    headerButtonText: { fontSize: 16 },
    headerCenter: { alignItems: 'center', flex: 1 },
    headerTitle: { fontSize: 18, fontWeight: '700' },
    connectionStatus: { fontSize: 12, color: '#666' },
    messagesList: { flex: 1 },
    messagesContent: { paddingBottom: 24 },
    inputContainer: { flexDirection: 'row', padding: 12, alignItems: 'center' },
    textInput: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, padding: 10, marginRight: 8 },
    sendButton: { paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#47a9db', borderRadius: 12 },
    sendButtonDisabled: { opacity: 0.4 },
    sendButtonText: { color: '#fff', fontWeight: '700' },
});
