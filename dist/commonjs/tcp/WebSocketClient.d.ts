/// <reference types="ws" />
import * as WebSocket from 'ws';
export default class WebSocketClient {
    baseURL: string;
    accessToken: AccessTokenData;
    private socket;
    constructor(baseURL: string);
    connect(clientId?: string): Promise<WebSocket>;
    disconnect(): void;
}
