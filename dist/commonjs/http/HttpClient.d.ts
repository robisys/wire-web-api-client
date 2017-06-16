import { AxiosPromise, AxiosRequestConfig } from 'axios';
export default class HttpClient {
    baseURL: string;
    accessToken: AccessTokenData;
    constructor(baseURL: string);
    createUrl(url: string): string;
    sendRequest(config: AxiosRequestConfig): AxiosPromise;
    sendJSONRequest(config: AxiosRequestConfig): AxiosPromise;
}
