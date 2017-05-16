import UserAssetData from './UserAssetData';

export default class UserData {
  public accent_id?: number;
  public assets: UserAssetData[];
  public deleted?: boolean;
  public email?: string;
  public handle?: string;
  public id: string;
  public locale: string;
  public name: string;
  public phone?: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
