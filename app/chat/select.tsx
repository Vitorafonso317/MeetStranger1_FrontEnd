import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width: SCREEN_W } = Dimensions.get('window');
const bgImage = require('../../assets/TelaInicio.svg');

interface ChatCategory {
    id: string;
    name: string;
}

const categories: ChatCategory[] = [
    { id: 'movies', name: 'Filme' },
    { id: 'games', name: 'Jogos' },
    { id: 'series', name: 'Series' },
];

export default function Select() {
    const router = useRouter();
    const [selected, setSelected] = useState<string | null>(null);

    const handleConverse = () => {
        if (!selected) return;
        router.push(`/chat/room?category=${selected}`);
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
                        <Text style={styles.headerArrowRed}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Tópicos</Text>
                    <View style={styles.headerBtn} />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    overScrollMode="never"
                >
                    {/* Badge Chat */}
                    <View style={styles.badgeContainer}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>Chat</Text>
                            <Text style={styles.badgeIcon}>💬</Text>
                        </View>
                    </View>

                    {/* Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>TOPICOS</Text>

                        <View style={styles.categoryList}>
                            {categories.map((cat) => (
                                <TouchableOpacity
                                    key={cat.id}
                                    style={selected === cat.id ? styles.categoryBtnSelected : styles.categoryBtn}
                                    onPress={() => setSelected(cat.id)}
                                    activeOpacity={0.8}
                                >
                                    <Text
                                        style={selected === cat.id
                                            ? styles.categoryBtnTextSelected
                                            : styles.categoryBtnText}
                                    >
                                        {cat.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <TouchableOpacity
                            style={selected ? styles.converseBtn : styles.converseBtnDisabled}
                            onPress={handleConverse}
                            disabled={!selected}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.converseBtnText}>Conversar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: { flex: 1, width: '100%' },
    safeArea: { flex: 1, width: '100%' },
    header: {
        backgroundColor: '#5ba3c7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    headerBtn: {
        width: 44,
        alignItems: 'center',
    },
    headerArrowRed: {
        fontSize: 30,
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
    headerTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 1,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 24,
        paddingHorizontal: 16,
    },
    badgeContainer: {
        marginBottom: 16,
    },
    badge: {
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 4,
            },
        }),
    },
    badgeText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#2196F3',
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
    badgeIcon: { fontSize: 20 },
    card: {
        width: '100%',
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        padding: 24,
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
    cardTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 3,
        marginBottom: 24,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    categoryList: {
        width: '100%',
        gap: 14,
        marginBottom: 28,
    },
    categoryBtn: {
        backgroundColor: '#fff9f1',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 16,
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 3,
            },
        }),
    },
    categoryBtnSelected: {
        backgroundColor: '#fde8e8',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#b20d1d',
        paddingVertical: 16,
        alignItems: 'center',
        ...Platform.select({
            web: { boxShadow: '3px 3px 0px #b20d1d' },
            default: {
                shadowColor: '#b20d1d',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 3,
            },
        }),
    },
    categoryBtnText: {
        fontSize: 22,
        fontWeight: '900',
        color: '#b20d1d',
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
    categoryBtnTextSelected: {
        fontSize: 22,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 2,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #b20d1d' },
            default: {
                textShadowColor: '#b20d1d',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    converseBtn: {
        paddingHorizontal: 32,
        paddingVertical: 10,
    },
    converseBtnDisabled: {
        paddingHorizontal: 32,
        paddingVertical: 10,
        opacity: 0.4,
    },
    converseBtnText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 2,
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
