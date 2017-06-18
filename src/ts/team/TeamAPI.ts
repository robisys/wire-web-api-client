import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import * as team from '../team';
import {HttpClient} from '../http';

export default class TeamAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      TEAMS: '/teams',
      MEMBERS: 'members',
    };
  }

  public postTeam(team: team.NewTeamData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        name: team.name,
        icon: team.icon,
      },
      method: 'post',
      url: `${TeamAPI.URL.TEAMS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.headers['location'];
      });
  }

  public putTeam(team: team.TeamData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        name: team.name,
        icon: team.icon,
      },
      method: 'put',
      url: `${TeamAPI.URL.TEAMS}/${team.id}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public getTeams(): Promise<team.TeamChunkData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public getTeam(teamId: string): Promise<team.TeamData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public deleteTeam(teamId: string): AxiosPromise {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: `${TeamAPI.URL.TEAMS}/${teamId}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public getMembers(teamId: string): Promise<team.MemberData[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.MEMBERS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public deleteMember(teamId: string, userId: string): AxiosPromise {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.MEMBERS}/${userId}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public postMembers(teamId: string, member: team.MemberData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        member: member,
      },
      method: 'post',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.MEMBERS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public putMembers(teamId: string, member: team.MemberData): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        member: member,
      },
      method: 'put',
      url: `${TeamAPI.URL.TEAMS}/${teamId}/${TeamAPI.URL.MEMBERS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}
