import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ChatMessage from '../components/ChatMessage';
import { useChat } from '../../hooks/useChat';

const { width: SCREEN_W } = Dimensions.get('window');
const bgImage = require('../../assets/TelaInicio.svg');

const categories = [
    { id: 'movies', name: 'Filme' },
    { id: 'games', name: 'Jogos' },
    { id: 'series', name: 'Séries' },
];

export default function ChatRoom() {
    const router = useRouter();
    const { category } = useLocalSearchParams<{ category: string }>();
    const [messageText, setMessageText] = useState('');
    const flatListRef = useRef<FlatList>(null);

    const { messages, isConnected, isMatching, partnerName, sendMessage, findNewPartner } =
        useChat(category || 'movies');

    const categoryInfo = categories.find((cat) => cat.id === category);

    useEffect(() => {
        if (messages.length > 0) {
            setTimeout(() => {
                flatListRef.current?.scrollToEnd({ animated: true });
            }, 50);
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!messageText.trim()) return;
        sendMessage(messageText.trim());
        setMessageText('');
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    style={styles.flex}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'android' ? -85 : 0}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.headerSideBtn}>
                            <Text style={styles.headerArrowRed}>←</Text>
                        </TouchableOpacity>

                        <View style={styles.headerCenter}>
                            <Text style={styles.headerTitle}>
                                Tema: <Text style={styles.headerTitleRed}>{categoryInfo?.name}</Text>
                            </Text>
                        </View>

                        <TouchableOpacity onPress={findNewPartner} style={styles.headerSideBtn}>
                            <Text style={styles.headerArrowDark}>→</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Badge Chat */}
                    <View style={styles.badgeRow}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>Chat</Text>
                            <Text style={styles.badgeIcon}>💬</Text>
                        </View>
                    </View>

                    {/* Card mensagens */}
                    <View style={styles.card}>
                        <View style={styles.statusRow}>
                            <Text style={styles.statusText}>
                                {isConnected
                                    ? `🟢 ${partnerName}`
                                    : isMatching
                                    ? '🟡 Procurando...'
                                    : '🟡 Aguardando...'}
                            </Text>
                        </View>

                        <FlatList
                            ref={flatListRef}
                            data={messages}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ChatMessage message={item} />}
                            style={styles.messagesList}
                            contentContainerStyle={styles.messagesContent}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                    {/* Input */}
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.textInput}
                            value={messageText}
                            onChangeText={setMessageText}
                            placeholder="Digite seu texto..."
                            placeholderTextColor="#aaa"
                            multiline
                            maxLength={500}
                        />
                        <TouchableOpacity
                            style={messageText.trim() ? styles.sendBtn : styles.sendBtnDisabled}
                            onPress={handleSendMessage}
                            disabled={!messageText.trim()}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.sendBtnIcon}>✈</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: { flex: 1 },
    safeArea: { flex: 1 },
    flex: { flex: 1 },
    header: {
        backgroundColor: '#5ba3c7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    headerSideBtn: { padding: 4, width: 44, alignItems: 'center' },
    headerArrowRed: {
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
    headerArrowDark: {
        fontSize: 28,
        fontWeight: '900',
        color: '#333',
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    headerCenter: { flex: 1, alignItems: 'center' },
    headerTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#2196F3',
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    headerTitleRed: {
        color: '#b20d1d',
    },
    badgeRow: {
        alignItems: 'center',
        marginTop: -16,
        zIndex: 10,
        marginBottom: 8,
    },
    badge: {
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        ...Platform.select({
            web: { boxShadow: '2px 2px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 4,
            },
        }),
    },
    badgeText: {
        fontSize: 16,
        fontWeight: '900',
        color: '#2196F3',
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    badgeIcon: { fontSize: 18 },
    card: {
        flex: 1,
        backgroundColor: '#e8f4fb',
        marginHorizontal: 12,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
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
    statusRow: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#c0dff0',
        backgroundColor: '#fff9f1',
    },
    statusText: { fontSize: 13, color: '#555', fontWeight: '600' },
    messagesList: { flex: 1 },
    messagesContent: { padding: 12, paddingBottom: 16 },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 8,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#fff9f1',
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 15,
        color: '#333',
        maxHeight: 100,
    },
    sendBtn: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    sendBtnDisabled: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        opacity: 0.4,
    },
    sendBtnIcon: { fontSize: 20, color: '#fff', fontWeight: '700' },
});
