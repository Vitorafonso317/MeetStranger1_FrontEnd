import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { COLORS, SHADOWS, TEXT_SHADOWS } from '../../constants/colors';
import { BORDER_RADIUS, BORDER_WIDTH, SPACING } from '../../constants/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/typography';

type Variant = 'primary' | 'accent' | 'ghost';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    variant?: Variant;
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

export default function CustomButton({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    style,
    accessibilityLabel,
    accessibilityHint,
}: CustomButtonProps) {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            style={[styles.base, styles[variant], isDisabled && styles.disabled, style]}
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.8}
            accessibilityLabel={accessibilityLabel ?? title}
            accessibilityHint={accessibilityHint}
            accessibilityRole="button"
            accessibilityState={{ disabled: isDisabled, busy: loading }}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'accent' ? COLORS.white : COLORS.primary} size="small" />
            ) : (
                <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        borderRadius: BORDER_RADIUS.xxl,
        borderWidth: BORDER_WIDTH.regular,
        borderColor: COLORS.border,
        paddingVertical: SPACING.md,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 48,
        ...SHADOWS.md,
    },
    primary: {
        backgroundColor: COLORS.surface,
    },
    accent: {
        backgroundColor: COLORS.primaryLight,
    },
    ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        ...Platform.select({ web: { boxShadow: 'none' }, default: { elevation: 0, shadowOpacity: 0 } }),
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: FONT_WEIGHT.black,
        letterSpacing: 2,
    },
    primaryText: {
        color: COLORS.primary,
        ...TEXT_SHADOWS.md,
    },
    accentText: {
        color: COLORS.primary,
        ...TEXT_SHADOWS.md,
    },
    ghostText: {
        color: COLORS.textBrown,
        fontSize: FONT_SIZE.sm,
        fontWeight: FONT_WEIGHT.semibold,
        letterSpacing: 0,
    },
});
