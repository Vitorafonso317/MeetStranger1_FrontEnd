import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { COLORS, TEXT_SHADOWS } from '../../constants/colors';
import { BORDER_RADIUS, BORDER_WIDTH, SPACING } from '../../constants/spacing';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/typography';

interface CustomInputProps extends TextInputProps {
    label?: string;
}

export default function CustomInput({ label, style, ...props }: CustomInputProps) {
    return (
        <View>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <TextInput
                style={[styles.input, style]}
                placeholderTextColor={COLORS.placeholder}
                accessibilityLabel={label ?? props.placeholder}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: FONT_SIZE.md,
        fontWeight: FONT_WEIGHT.black,
        color: COLORS.accent,
        marginBottom: SPACING.sm,
        letterSpacing: 1,
        ...TEXT_SHADOWS.sm,
    },
    input: {
        backgroundColor: COLORS.accentLight,
        borderRadius: BORDER_RADIUS.md,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        fontSize: FONT_SIZE.base,
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
});
