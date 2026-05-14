import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Platform,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = SCREEN_W - 32;
const bgImage = require('../../assets/TelaInicio.svg');

type ModalType = 'home' | 'howto' | 'support' | 'rules' | 'problems';

export default function About() {
    const router = useRouter();
    const [active, setActive] = useState<ModalType>('home');
    const [supportName, setSupportName] = useState('');
    const [supportMessage, setSupportMessage] = useState('');

    const renderContent = () => {
        // HOME - Tela inicial
        if (active === 'home') {
            return (
                <>
                    <Text style={styles.logoMeet}>MEET</Text>
                    <Text style={styles.logoStranger}>STRANGER</Text>
                    
                    <View style={styles.modalBody}>
                        {[
                            'O Meet Stranger é um aplicativo que permite conversas temporárias entre pessoas anônimas, conectando usuários com interesses em comum em um ambiente simples, seguro e confortável.',
                        ].map((item, i) => (
                            <Text key={i} style={styles.listItem}>{i + 1}. {item}</Text>
                        ))}
                    </View>
                </>
            );
        }

        // SUPPORT - Formulário de suporte
        if (active === 'support') {
            return (
                <>
                    <TouchableOpacity 
                        onPress={() => setActive('home')} 
                        style={{ alignSelf: 'flex-start', marginBottom: 16 }}
                    >
                        <Text style={styles.backButton}>← Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.logoMeet}>MEET</Text>
                    <Text style={styles.logoStranger}>STRANGER</Text>
                    <Text style={styles.modalTitleBlue}>Suporte</Text>

                    <View style={styles.supportForm}>
                        <Text style={styles.supportLabel}>Nome</Text>
                        <TextInput
                            style={styles.supportInput}
                            placeholder="Seu nome"
                            placeholderTextColor="#999"
                            value={supportName}
                            onChangeText={setSupportName}
                        />

                        <Text style={styles.supportLabel}>Mensagem</Text>
                        <TextInput
                            style={[styles.supportInput, styles.supportTextArea]}
                            placeholder="Descreva seu problema..."
                            placeholderTextColor="#999"
                            value={supportMessage}
                            onChangeText={setSupportMessage}
                            multiline
                            numberOfLines={4}
                        />

                        <TouchableOpacity style={styles.supportButton}>
                            <Text style={styles.supportButtonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }

        // HOWTO - Como usar (alternativa explícita)
        if (active === 'howto') {
            return (
                <>
                    <TouchableOpacity 
                        onPress={() => setActive('home')} 
                        style={{ alignSelf: 'flex-start', marginBottom: 16 }}
                    >
                        <Text style={styles.backButton}>← Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.logoMeet}>MEET</Text>
                    <Text style={styles.logoStranger}>STRANGER</Text>
                    <Text style={styles.modalTitle}>Como usar?</Text>
                    <View style={styles.modalBody}>
                        {[
                            'FAÇA LOGIN OU CRIE UMA CONTA.',
                            'ESCOLHA UM AVATAR.',
                            'SELECIONE UM TEMA (FILMES, JOGOS OU SÉRIES).',
                            'CLIQUE EM CONVERSAR.',
                            'O SISTEMA IRÁ CONECTAR VOCÊ COM OUTRA PESSOA.',
                        ].map((item, i) => (
                            <Text key={i} style={styles.listItem}>{i + 1}. {item}</Text>
                        ))}
                    </View>
                </>
            );
        }

        // RULES - Regras de uso
        if (active === 'rules') {
            return (
                <>
                    <TouchableOpacity 
                        onPress={() => setActive('home')} 
                        style={{ alignSelf: 'flex-start', marginBottom: 16 }}
                    >
                        <Text style={styles.backButton}>← Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.logoMeet}>MEET</Text>
                    <Text style={styles.logoStranger}>STRANGER</Text>
                    <Text style={styles.modalTitleRed}>Regras de{'\n'}uso</Text>
                    <View style={styles.modalBody}>
                        {[
                            'RESPEITE OS OUTROS USUÁRIOS.',
                            'NÃO ENVIE MENSAGENS OFENSIVAS.',
                            'NÃO COMPARTILHE INFORMAÇÕES PESSOAIS.',
                            'USUÁRIOS QUE VIOLAREM AS REGRAS PODEM SER BLOQUEADOS.',
                        ].map((item, i) => (
                            <Text key={i} style={styles.listItem}>• {item}</Text>
                        ))}
                    </View>
                </>
            );
        }

        // PROBLEMS - Problemas comuns
        if (active === 'problems') {
            return (
                <>
                    <TouchableOpacity 
                        onPress={() => setActive('home')} 
                        style={{ alignSelf: 'flex-start', marginBottom: 16 }}
                    >
                        <Text style={styles.backButton}>← Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.logoMeet}>MEET</Text>
                    <Text style={styles.logoStranger}>STRANGER</Text>
                    <Text style={styles.modalTitle}>Problemas{'\n'}comuns</Text>
                    <View style={styles.modalBody}>
                        {[
                            { q: 'NÃO CONSIGO ENCONTRAR ALGUÉM PARA CONVERSAR', a: '→ AGUARDE ALGUNS SEGUNDOS ENQUANTO O SISTEMA PROCURA OUTRO USUÁRIO.' },
                            { q: 'A CONVERSA CAIU', a: '→ CLIQUE EM "CONVERSAR" NOVAMENTE PARA ENCONTRAR OUTRA PESSOA.' },
                            { q: 'NÃO CONSIGO FAZER LOGIN', a: '→ VERIFIQUE SE SEU EMAIL E SENHA ESTÃO CORRETOS.' },
                        ].map((item, i) => (
                            <View key={i} style={styles.problemItem}>
                                <Text style={styles.listItem}>• {item.q}</Text>
                                <Text style={styles.listItemAnswer}>{item.a}</Text>
                            </View>
                        ))}
                    </View>
                </>
            );
        }
    };

    return (
        <ImageBackground source={bgImage} style={styles.bg} resizeMode="cover">
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
                        <Text style={styles.headerArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Sobre</Text>
                    <View style={styles.headerBtn} />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    overScrollMode="never"
                >
                    <View style={styles.card}>
                        {renderContent()}
                    </View>

                    {/* Mostrar botões de navegação apenas na HOME */}
                    {active === 'home' && (
                        <View style={styles.navButtons}>
                            <TouchableOpacity
                                style={styles.navBtn}
                                onPress={() => setActive('howto')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.navBtnLabelBlue}>Como{'\n'}usar</Text>
                                <Text style={styles.navBtnIcon}>📖✨</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.navBtn}
                                onPress={() => setActive('rules')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.navBtnLabelRed}>Regras de{'\n'}uso</Text>
                                <Text style={styles.navBtnIcon}>📖✅❌</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.navBtn}
                                onPress={() => setActive('problems')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.navBtnLabelBlue}>Problemas{'\n'}comuns</Text>
                                <Text style={styles.navBtnIcon}>🤔❓</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.navBtn}
                                onPress={() => setActive('support')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.navBtnLabelRed}>Suporte</Text>
                                <Text style={styles.navBtnIcon}>🆘💬</Text>
                            </TouchableOpacity>
                        </View>
                    )}
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
    headerArrow: {
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
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 32,
        alignItems: 'center',
    },
    card: {
        width: '92%',
        minHeight: 320,
        backgroundColor: '#fff9f1',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000',
        padding: 6,
        alignItems: 'center',
        marginBottom: 16,
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
    logoMeet: {
        fontSize: 30,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 2,
        lineHeight: 32,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    logoStranger: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 2,
        marginBottom: 12,
        lineHeight: 28,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 16,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    modalTitleRed: {
        fontSize: 20,
        fontWeight: '900',
        color: '#b20d1d',
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 16,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
        modalBody: {
        width: '100%',
        gap: 10,
        alignItems: 'flex-start',

        paddingLeft: 4,
    },
    lemItem: {
            marginBottom: 10,
        },
    listItem: {
        fontSize: 15,
        fontWeight: '700',
        color: '#2196F3',
        lineHeight: 24,
        textAlign: 'center',
        paddingRight: 10,
    },
    listItemAnswer: {
        fontSize: 13,
        fontWeight: '600',
        color: '#555',
        lineHeight: 20,
        marginTop: 2,
    },
    navButtons: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        rowGap: 22,
        columnGap: 18,
    },
    navBtn: {
        width: '45%',
        backgroundColor: '#fff9f1',
        borderRadius: 18,
        borderWidth: 3,
        borderColor: '#000',
        paddingVertical: 18,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        minHeight: 130,

        ...Platform.select({
            web: { boxShadow: '4px 4px 0px #000' },
            default: {
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 5,
            },
        }),
    },
    navBtnActive: {
        flex: 1,
        backgroundColor: '#fde8e8',
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#b20d1d',
        padding: 14,
        alignItems: 'center',
        gap: 6,
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
    navBtnLabelRed: {
        fontSize: 14,
        fontWeight: '900',
        color: '#b20d1d',
        textAlign: 'center',
        letterSpacing: 0.5,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    navBtnLabelBlue: {
        fontSize: 14,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        letterSpacing: 0.5,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    navBtnIcon: { fontSize: 22 },
    backButton: {
        fontSize: 18,
        fontWeight: '900',
        color: '#b20d1d',
        letterSpacing: 0.5,
        ...Platform.select({
            web: { textShadow: '1px 1px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 0,
            },
        }),
    },
    modalTitleBlue: {
        fontSize: 24,
        fontWeight: '900',
        color: '#2196F3',
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 20,
        ...Platform.select({
            web: { textShadow: '2px 2px 0px #000' },
            default: {
                textShadowColor: '#000',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 0,
            },
        }),
    },
    supportForm: {
        width: '100%',
        gap: 14,
        marginTop: 16,
    },
    supportLabel: {
        fontSize: 14,
        fontWeight: '900',
        color: '#2196F3',
        letterSpacing: 0.5,
        marginLeft: 4,
    },
    supportInput: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 14,
        fontSize: 14,
        backgroundColor: '#e8f4fb',
        fontWeight: '600',
        color: '#333',
    },
    supportTextArea: {
        height: 100,
        textAlignVertical: 'top',
        paddingTop: 12,
    },
    supportButton: {
        backgroundColor: '#b20d1d',
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 28,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        marginTop: 8,
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
    supportButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 0.5,
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
