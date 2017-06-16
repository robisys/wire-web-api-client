/// <reference types="node" />
import EventEmitter = require('events');
import AuthAPI from '../auth/AuthAPI';
import HttpClient from '../http/HttpClient';
import UserAPI from '../user/UserAPI';
import TeamAPI from '../team/TeamAPI';
import WebSocketClient from '../tcp/WebSocketClient';
import Context from "./Context";
export default class WireAPIClient extends EventEmitter {
    urls: {
        rest: string;
        ws?: string;
    };
    auth: {
        api: AuthAPI;
    };
    client: {
        http: HttpClient;
        ws: WebSocketClient;
    };
    contexts: Map<string, Context>;
    user: {
        api: UserAPI;
    };
    team: {
        api: TeamAPI;
    };
    static TOPIC: {
        WEB_SOCKET_MESSAGE: string;
    };
    constructor(urls: {
        rest: string;
        ws?: string;
    });
    init(): Promise<Context>;
    login(data: LoginData): Promise<Context>;
    refreshAccessToken(): Promise<AccessTokenData>;
    connect(clientId: string): Promise<void>;
    private createContext(userData);
    disconnect(): void;
}
