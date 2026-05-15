import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/screens/selectStyles';

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

                <View style={styles.content}>
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
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
