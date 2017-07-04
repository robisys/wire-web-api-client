import MemberData from './MemberData';

interface NewTeamData {
  members?: MemberData[];
  name: string;
  icon: string;
  binding?: boolean;
}

export default NewTeamData;
