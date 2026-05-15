import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ChatMessage from '../components/ChatMessage';
import { useChat } from '../../hooks/useChat';
import { styles } from '../../styles/screens/roomStyles';

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

    const { messages, isConnected, isMatching, connectionError, partnerName, sendMessage, findNewPartner } =
        useChat(category || 'movies');

    const categoryInfo = categories.find((cat) => cat.id === category);

    useEffect(() => {
        if (messages.length > 0) {
            const timer = setTimeout(() => {
                flatListRef.current?.scrollToEnd({ animated: true });
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [messages]);

    const handleSendMessage = useCallback(() => {
        if (!messageText.trim()) return;
        sendMessage(messageText.trim());
        setMessageText('');
    }, [messageText, sendMessage]);

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
                                    : connectionError
                                    ? '🔴 Servidor offline'
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
                            removeClippedSubviews
                            maxToRenderPerBatch={10}
                            windowSize={5}
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
