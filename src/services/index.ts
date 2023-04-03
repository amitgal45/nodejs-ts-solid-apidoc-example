import { leagueService } from "./League.service"
import { nationService } from "./Nation.service";
import { playerService } from "./Player.service";
import { teamService } from "./Team.service";

leagueService

// interface IRootService{
//     LeagueService:LeagueService;
//     NationService:LeagueService;
//     PlayerService:LeagueService;
//     TeamService:TeamService;

// }

class RootService {
    LeagueService=leagueService;
    NationService=nationService;
    PlayerService=playerService;
    TeamService=teamService;
}

export const rootService = new RootService();