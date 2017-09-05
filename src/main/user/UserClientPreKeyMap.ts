import {ClientPreKey} from '../auth';

interface UserClientPreKeyMap {
  [userId: string]: {
    [clientId: string]: ClientPreKey;
  };
}

export default UserClientPreKeyMap;
