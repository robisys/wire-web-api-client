import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import {MemberData} from '../';
import {HttpClient} from '../../http';
import TeamAPI from '../team/TeamAPI';

export default class MemberAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      MEMBERS: 'members',
    };
  }

  /**
   * Get all members of a team.
   * @param teamId The team ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/conversations/getTeamMembers
   */
  public getMembers(teamId: string): Promise<MemberData[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get a single member.
   * @param teamId The team ID the member is part of
   * @param userId The user ID of the corresponding member
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/conversations/getTeamMember
   */
  public getMember(teamId: string, userId: string): Promise<MemberData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}/${userId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Delete a member.
   * @param teamId The team ID the member is part of
   * @param userId The user ID of the corresponding member
   * @param password The password to confirm the deletion
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/conversations/deleteTeamMember
   */
  public deleteMember(teamId: string, userId: string, password: string): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        password,
      },
      method: 'delete',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}/${userId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Add a member.
   * @param teamId The team ID of the team the member should be added to
   * @param member The member to add
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/conversations/addTeamMember
   */
  public postMembers(teamId: string, member: MemberData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        member: member,
      },
      method: 'post',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Update a member.
   * @param teamId The team ID of the team the member is part of
   * @param member The member to update
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/conversations/updateTeamMember
   */
  public putMembers(teamId: string, member: MemberData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        member: member,
      },
      method: 'put',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${MemberAPI.URL.MEMBERS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }
}
