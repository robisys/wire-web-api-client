/// <reference path="AccessTokenData.d.ts" />
/// <reference path="LoginData.d.ts" />
import { AxiosPromise } from 'axios';
import HttpClient from '../http/HttpClient';
export default class AuthAPI {
    private client;
    constructor(client: HttpClient);
    static readonly URL: {
        ACCESS: string;
        ACTIVATE: string;
        COOKIES: string;
        INVITATIONS: string;
        LOGIN: string;
        LOGOUT: string;
        REGISTER: string;
    };
    postCookiesRemove(login: LoginData, labels?: string[]): AxiosPromise;
    postLogin(login: LoginData): Promise<AccessTokenData>;
    postLogout(): AxiosPromise;
    postAccess(): Promise<AccessTokenData>;
}
