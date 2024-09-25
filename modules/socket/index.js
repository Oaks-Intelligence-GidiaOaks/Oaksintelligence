import { io, Socket } from "socket.io-client";
import { SubLevelEvent } from "./constants";

class SocketService {
  static instance;
  socket = null;

  constructor() {}

  static getInstance() {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  connect(user_id) {
    if (!this.socket) {
      this.socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER, {
        query: {
          user_id,
          project_name: "oaks-intelligence",
          name: `oaks-user-${user_id}`,
          email: `oaks-email-${user_id}`,
        },
        transports: ["websocket", "polling"],
      });

      this.socket.on("connect", () => {
        console.log("Socket connected:", this.socket?.id);
      });

      this.socket.on("disconnect", () => {
        console.log("Socket disconnected");
        this.socket = null;
      });

      this.socket.on(SubLevelEvent.LOGIN_USER_EVENT, () => {
        console.log("Login Event emitted");
      });

      this.socket.on("success", () => {
        console.log("event emitted successfully");
      });

      this.socket.on("error", (err) => {
        console.log("Error causing socket disconnect", err);
      });
    }
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }

  emit(event, data) {
    console.log(event, ":Event");
    this.socket?.emit(event, data);
  }

  on(event, callback) {
    this.socket?.on(event, callback);
  }

  isConnected() {
    return this.socket?.connected;
  }
}

export default SocketService.getInstance();
