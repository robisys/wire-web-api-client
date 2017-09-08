import {UserAssetData} from '../user';

interface UserUpdate {
  accent_id?: number;
  assets?: UserAssetData[];
  name: string;
}

export default UserUpdate;
