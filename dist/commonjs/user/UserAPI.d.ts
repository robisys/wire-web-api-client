/// <reference path="UserData.d.ts" />
import HttpClient from '../http/HttpClient';
export default class UserAPI {
    private client;
    constructor(client: HttpClient);
    static readonly URL: {
        CONNECTIONS: string;
        PROPERTIES: string;
        SELF: string;
        USERS: string;
    };
    getSelf(): Promise<UserData>;
    getUsers(parameters: {
        handles?: string[];
        ids?: string[];
    }): Promise<UserData[]>;
}
