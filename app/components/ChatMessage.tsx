import React from "react";
import { StyleSheet } from "react-native";
import { ChatBubble as DSChatBubble} from "../../design-system";
import { ChatMessage as ChatMessageType } from "../../constants/types";
interface ChatMessageProps {
    message: ChatMessageType;
}
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const formatTime = (date?: Date | string | number) => {
        if (!date) return '';
        const d = date instanceof Date ? date : new Date(date);
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return (
        <DSChatBubble
            message={message.text}
            position={message.isUser ? 'right' : 'left'}
            timestamp={formatTime(message.timestamp as any)}
            username={message.UserName}
            showUsername={!message.isUser}
        />
    );
}

export default React.memo(ChatMessage, (prev, next) => prev.message.id === next.message.id);
 