import { io, Socket } from 'socket.io-client';
import { API_CONFIG } from './config';

type Listener = (...args: any[]) => void;

class WsService {
  socket: Socket | null = null;
  connected = false;

  private onMessageListeners: Listener[] = [];
  private onMatchingFoundListeners: Listener[] = [];
  private onUserLeftListeners: Listener[] = [];

  async connect() {
    if (this.connected) return;
    try {
      this.socket = io(API_CONFIG.SOCKET_URL || API_CONFIG.BASE_URL, { transports: ['websocket'] });
      this.socket.on('connect', () => {
        this.connected = true;
      });

      this.socket.on('message', (data: any) => this.onMessageListeners.forEach(l => l(data)));
      this.socket.on('matching-found', (data: any) => this.onMatchingFoundListeners.forEach(l => l(data)));
      this.socket.on('partner-left', () => this.onUserLeftListeners.forEach(l => l()));
    } catch (e) {
      console.warn('WebSocket connect failed:', e);
      this.connected = false;
      this.socket = null;
    }
  }

  disconnected() {
    this.socket?.disconnect();
    this.socket = null;
    this.connected = false;
  }

  onMessage(listener: Listener) {
    this.onMessageListeners.push(listener);
  }

  onMatchingFound(listener: Listener) {
    this.onMatchingFoundListeners.push(listener);
  }

  onUserLeft(listener: Listener) {
    this.onUserLeftListeners.push(listener);
  }

  removeAllListeners() {
    this.onMessageListeners = [];
    this.onMatchingFoundListeners = [];
    this.onUserLeftListeners = [];
    this.socket?.off();
  }

  async findMatch(category?: string) {
    if (!this.connected) await this.connect();
    this.socket?.emit('find-match', { category });
  }

  joinRoom(roomId: string) {
    this.socket?.emit('join-room', { roomId });
  }

  leaveRoom(roomId: string) {
    this.socket?.emit('leave-room', { roomId });
  }

  sendMessage(roomId: string, message: string) {
    this.socket?.emit('send-message', { roomId, message });
  }
}

export const wsService = new WsService();
