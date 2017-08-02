import UserAssetData from '../user/UserAssetData';
import TeamData from '../team/team/TeamData';

interface RegisterData {
  accent_id?: number;
  locale?: string;
  email?: string;
  name: string;
  password?: string;
  invitation_code?: string;
  label?: string;
  phone?: string;
  phone_code?: string;
  assets?: UserAssetData[];
  team?: TeamData;
}

export default RegisterData;
