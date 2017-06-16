import { AxiosPromise } from 'axios';
import HttpClient from '../http/HttpClient';
export default class TeamAPI {
    private client;
    constructor(client: HttpClient);
    static readonly URL: {
        TEAMS: string;
        MEMBERS: string;
    };
    postTeam(team: NewTeamData): AxiosPromise;
    putTeam(team: TeamData): AxiosPromise;
    getTeams(): Promise<TeamChunkData>;
    getTeam(teamId: string): Promise<TeamData>;
    deleteTeam(teamId: string): AxiosPromise;
    getMembers(teamId: string): Promise<MemberData[]>;
    deleteMember(teamId: string, userId: string): AxiosPromise;
    postMembers(teamId: string, member: MemberData): AxiosPromise;
    putMembers(teamId: string, member: MemberData): AxiosPromise;
}
