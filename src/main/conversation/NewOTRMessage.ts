import {OTRRecipients} from '../conversation';

interface NewOTRMessage {
  data?: any; // Use 'string' for JSON, default is Protobuf
  native_priority?: 'low' | 'high';
  native_push?: boolean;
  recipients: OTRRecipients;
  sender: string;
  transient?: boolean;
}

export default NewOTRMessage;
