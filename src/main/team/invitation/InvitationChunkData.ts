import InvitationData from './InvitationData';

interface InvitationChunkData {
  has_more: boolean;
  invitations: InvitationData[];
}

export default InvitationChunkData;
