import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/screens/aboutStyles';

const bgImage = require('../../assets/TelaInicio.svg');

type ModalType = 'home' | 'howto' | 'support' | 'rules' | 'problems';

export default function About() {
    const router = useRouter();
    const [active, setActive] = useState<ModalType>('home');
    const [supportName, setSupportName] = useState('');
    const [supportMessage, setSupportMessage] = useState('');

    const renderContent = () => {
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

                <View style={styles.content}>
                    <View style={styles.card}>
                        {renderContent()}
                    </View>

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
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
