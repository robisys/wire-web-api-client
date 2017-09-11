import {OTRClientMap} from '../conversation';

interface OTRRecipients {
  [recipient: string]: OTRClientMap;
}

export default OTRRecipients;
