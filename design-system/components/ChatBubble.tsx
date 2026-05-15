import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from '../tokens/colors';
import { Spacing } from '../tokens/spacing';

const balaoFala1 = require('../../assets/BalaoFala1.svg');
const balaoFala2 = require('../../assets/BalaoFala2.svg');

export type ChatBubblePosition = 'left' | 'right';

interface ChatBubbleProps {
  message: string;
  position: ChatBubblePosition;
  timestamp?: string;
  username?: string;
  showUsername?: boolean;
}

export const ChatBubble = React.memo(function ChatBubble({
  message,
  position,
  timestamp,
  username,
  showUsername = false,
}: ChatBubbleProps) {
  const isUser = position === 'right';

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.otherContainer]}>
      {showUsername && username && !isUser && (
        <Text style={styles.username}>{username}</Text>
      )}
      <ImageBackground
        source={isUser ? balaoFala1 : balaoFala2}
        style={[styles.bubble, isUser ? styles.userBubble : styles.otherBubble]}
        resizeMode="stretch"
      >
        <Text style={[styles.message, isUser ? styles.userMessage : styles.otherMessage]}>
          {message}
        </Text>
        {timestamp && (
          <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.otherTimestamp]}>
            {timestamp}
          </Text>
        )}
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
  },
  userContainer: {
    alignItems: 'flex-end',
  },
  otherContainer: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  userBubble: {},
  otherBubble: {},
  username: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginBottom: Spacing.xs,
    marginLeft: Spacing.sm,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessage: {
    color: '#333',
  },
  otherMessage: {
    color: Colors.chat.otherText,
  },
  timestamp: {
    fontSize: 11,
    marginTop: Spacing.xs,
  },
  userTimestamp: {
    color: 'rgba(0, 0, 0, 0.45)',
    textAlign: 'right',
  },
  otherTimestamp: {
    color: Colors.textTertiary,
    textAlign: 'left',
  },
});
