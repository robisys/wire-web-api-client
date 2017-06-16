export default class Context {
    clientID: string;
    environment: string;
    userID: string;
    constructor(userID: string, clientID?: string);
}
