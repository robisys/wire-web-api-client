import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {ClientMismatch, OTRPayloadBundle} from '../conversation';
import {HttpClient} from '../http';

export default class ConversationAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      CLIENTS: '/clients',
    };
  }

  public postConversations(
    clientID: string,
    conversationId: string,
    payload: OTRPayloadBundle = {},
  ): Promise<ClientMismatch> {
    const hasContent = !!Object.keys(payload).length;

    const config: AxiosRequestConfig = {
      data: {
        sender: clientID,
        recipients: payload,
      },
      method: 'post',
      url: `/conversations/${conversationId}/otr/messages?ignore_missing=${hasContent}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }
}
