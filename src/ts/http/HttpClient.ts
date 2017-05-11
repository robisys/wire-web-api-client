export default class HttpClient {
  constructor(public baseURL: string) {
  }

  public createUrl(url: string) {
    return `${this.baseURL}${url}`;
  }
}
