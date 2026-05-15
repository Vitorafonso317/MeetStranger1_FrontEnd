import { Platform } from 'react-native';

export const COLORS = {
    // Primário — vermelho retro-comic
    primary: '#b20d1d',
    primaryLight: '#fde8e8',

    // Acento — azul
    accent: '#2196F3',
    accentLight: '#e8f4fb',

    // Superfícies
    surface: '#fff9f1',
    white: '#ffffff',

    // Header
    headerBg: '#5ba3c7',

    // Bordas
    border: '#000000',

    // Textos
    text: '#333333',
    textSecondary: '#555555',
    textMuted: '#666666',
    placeholder: '#aaaaaa',
    textBrown: '#8B4513',

    // Semânticos
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
} as const;

// Sombra retro-comic: deslocamento sólido sem blur
export const SHADOWS = {
    sm: Platform.select({
        web: { boxShadow: '2px 2px 0px #000' as string },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 1 as number,
            shadowRadius: 0,
            elevation: 3,
        },
    }),
    md: Platform.select({
        web: { boxShadow: '3px 3px 0px #000' as string },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1 as number,
            shadowRadius: 0,
            elevation: 4,
        },
    }),
    lg: Platform.select({
        web: { boxShadow: '4px 4px 0px #000' as string },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1 as number,
            shadowRadius: 0,
            elevation: 6,
        },
    }),
    xl: Platform.select({
        web: { boxShadow: '5px 5px 0px #000' as string },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 1 as number,
            shadowRadius: 0,
            elevation: 8,
        },
    }),
} as const;

export const TEXT_SHADOWS = {
    sm: Platform.select({
        web: { textShadow: '1px 1px 0px #000' as string },
        default: {
            textShadowColor: '#000',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
        },
    }),
    md: Platform.select({
        web: { textShadow: '2px 2px 0px #000' as string },
        default: {
            textShadowColor: '#000',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 0,
        },
    }),
    lg: Platform.select({
        web: { textShadow: '3px 3px 0px #000' as string },
        default: {
            textShadowColor: '#000',
            textShadowOffset: { width: 3, height: 3 },
            textShadowRadius: 0,
        },
    }),
} as const;

// Compat: exportação legacy usada por componentes antigos
export const colors = {
    primary: COLORS.accent,
    red: COLORS.primary,
    surface: COLORS.surface,
    text: COLORS.text,
    border: COLORS.border,
};
