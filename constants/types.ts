export interface User {
    id: string;
    name: string;
    email: string;
    avatarId?: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    UserName: string;
}

export interface ChatCategory {
    id: string;
    name: string;
    icon: string;
}

export interface ProfileData {
    userName: string;
    avatarId: string;
}