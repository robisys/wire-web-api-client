import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import {InvitationChunkData, NewInvitationData, InvitationData} from '../';
import {HttpClient} from '../../http';
import TeamAPI from '../team/TeamAPI';

export default class InvitationAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      INVITATIONS: 'invitations',
    };
  }

  public getInvitation(teamId: string, invitationId: string): Promise<InvitationData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${InvitationAPI.URL.INVITATIONS}/${invitationId}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public getInvitations(teamId: string): Promise<InvitationChunkData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${InvitationAPI.URL.INVITATIONS}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public deleteInvitation(teamId: string, invitationId: string): AxiosPromise {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${InvitationAPI.URL.INVITATIONS}/${invitationId}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public postInvitation(teamId: string, invitation: NewInvitationData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: invitation,
      method: 'post',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${InvitationAPI.URL.INVITATIONS}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public getInvitationFromCode(invitationCode: string): Promise<InvitationData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      params: {
        code: invitationCode,
      },
      url: `${TeamAPI.URL.TEAMS}/${InvitationAPI.URL.INVITATIONS}/info`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }
}
