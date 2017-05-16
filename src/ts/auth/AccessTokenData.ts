export default class AccessTokenData {
  public access_token: string;
  public expires_in: number;
  public token_type: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
