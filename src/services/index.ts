import { leagueService } from "./League.service"
import { nationService } from "./Nation.service";
import { playerService } from "./Player.service";
import { teamService } from "./Team.service";

leagueService

interface IRootService{
    LeagueService:typeof leagueService;
    NationService:typeof nationService;
    PlayerService:typeof playerService;
    TeamService:typeof teamService;

}

class RootService implements IRootService {
    LeagueService=leagueService;
    NationService=nationService;
    PlayerService=playerService;
    TeamService=teamService;
}

export const rootService = new RootService();