import {OTRRecipients} from '../conversation';

interface NewOTRMessage {
  data?: string;
  native_priority?: 'low' | 'high';
  native_push?: boolean;
  recipients: OTRRecipients;
  sender: string;
  transient?: boolean;
}

export default NewOTRMessage;
