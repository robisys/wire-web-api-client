import UserAssetData from "../user/UserAssetData";

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
}

export default RegisterData;
