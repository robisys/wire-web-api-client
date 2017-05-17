interface UserData {
  accent_id?: number;
  assets: UserAssetData[];
  deleted?: boolean;
  email?: string;
  handle?: string;
  id: string;
  locale: string;
  name: string;
  phone?: string;
}