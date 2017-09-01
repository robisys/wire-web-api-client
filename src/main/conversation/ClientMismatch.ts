import UserClients from './UserClients';

interface ClientMismatch {
  deleted: UserClients;
  missing: UserClients;
  redundant: UserClients;
  time: string;
}

export default ClientMismatch;
