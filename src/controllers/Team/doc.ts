// ###############################
// ### GET - /api/team
// ###############################
/**
 * @api {get} /api/team/ Get All
 * @apiName GetTeams
 * @apiGroup Team
 *
 * @apiSuccess {Array} teams Teams Array
 * @apiSuccess {Object} teams.team Team Object
 * @apiSuccess {String} teams.team.id Id of the Team.
 * @apiSuccess {String} teams.team.name Name of the League.
 * @apiSuccess {String} teams.team.leagueId  Id of the League.
 *  @apiSuccess {String} teams.team.place  Place of the Team.
 * @apiSuccess {String} teams.team.points  Points of the Team.
 * @apiSuccess {String} teams.team.wins  Wins of the Team.
 *  @apiSuccess {String} teams.team.draws  Draws of the Team.
 *  @apiSuccess {String} teams.team.losses  Loses of the Team.
 *  @apiSuccess {String} teams.team.ratios  Ratio of the Team.
 *  @apiSuccess {String} teams.team.budget  Budget of the Team.
 * @apiSuccess {String} teams.team.games  Games of the Team.
 */
// ###############################

// ###############################
// ### GET - /api/team/:id
// ###############################
/**
   * @api {get} /api/team/:id Get by id
   * @apiName GetTeamById
   * @apiGroup Team
   *
   * @apiParam {String} id Team's unique ID.
   *
   * @apiSuccess {Object} team Team Object
   * @apiSuccess {String} team.id Id of the Team.
   * @apiSuccess {String} team.name Name of the League.
   * @apiSuccess {String} team.leagueId  Id of the League.
   *  @apiSuccess {String} team.place  Place of the Team.
   * @apiSuccess {String} team.points  Points of the Team.
   * @apiSuccess {String} team.wins  Wins of the Team.
   *  @apiSuccess {String} team.draws  Draws of the Team.
   *  @apiSuccess {String} team.losses  Loses of the Team.
   *  @apiSuccess {String} team.ratios  Ratio of the Team.
   *  @apiSuccess {String} team.budget  Budget of the Team.
   * @apiSuccess {String} team.games  Games of the Team.

   */
// ###############################

// ###############################
// ### GET - /api/team/:id/player
// ###############################
/**
   * @api {get} /api/team/:id/player Get Players by id
   * @apiName GetPlayersByTeamId
   * @apiGroup Team
   *
   * @apiParam {String} id Team's unique ID.
   *
 * @apiSuccess {Array} players Player Array
  * @apiSuccess {Object} players.player Player Object
 * @apiSuccess {String} players.player.id Id of the Player.
 * @apiSuccess {String} players.player.name Name of the Player.
 * @apiSuccess {String} players.player.teamId  Id of the Team.
 * @apiSuccess {String} players.player.role Role of the Player.
 * @apiSuccess {String} players.player.img Image of the Player.
 * @apiSuccess {String} players.player.kitNumber Kit Number of the Player.
 * @apiSuccess {String} players.player.maket_value Market value of the Player.

   */
// ###############################

// ###############################
// ### POST - /api/team
// ###############################
/**
 * @api {post} /api/team/ Add team
 * @apiName AddTeam
 * @apiGroup Team
 *
 * @apiBody {String} name Name of the Team.
 * @apiBody {String} leagueId  Id of the League.
 *   @apiBody {String} place  Place of the Team.
 * @apiBody {String} points  Points of the Team.
 * @apiBody {String} wins  Wins of the Team.
 *  @apiBody {String} draws  Draws of the Team.
 *  @apiBody {String} losses  Loses of the Team.
 *  @apiBody {String} ratios  Ratio of the Team.
 *  @apiBody {String} budget  Budget of the Team.
 * @apiBody {String} games  Games of the Team.
 *
 * @apiSuccess {Array} teams Teams Array
 * @apiSuccess {Object} teams.team Team Object
 * @apiSuccess {String} teams.team.id Id of the Team.
 * @apiSuccess {String} teams.team.name Name of the League.
 * @apiSuccess {String} teams.team.leagueId  Id of the League.
 *  @apiSuccess {String} teams.team.place  Place of the Team.
 * @apiSuccess {String} teams.team.points  Points of the Team.
 * @apiSuccess {String} teams.team.wins  Wins of the Team.
 *  @apiSuccess {String} teams.team.draws  Draws of the Team.
 *  @apiSuccess {String} teams.team.losses  Loses of the Team.
 *  @apiSuccess {String} teams.team.ratios  Ratio of the Team.
 *  @apiSuccess {String} teams.team.budget  Budget of the Team.
 * @apiSuccess {String} teams.team.games  Games of the Team.
 */
// ###############################

// ###############################
// ### PUT - /api/team/:id
// ###############################
/**
   * @api {put} /api/team/:id Edit by id
   * @apiName EditTeam
   * @apiGroup Team
   * 
    * @apiParam {String} id id of the Team.
   * 
   * @apiBody {String} name Name of the Team.
   * @apiBody {String} leagueId  Id of the League.
      *   @apiBody {String} place  Place of the Team.
   * @apiBody {String} points  Points of the Team.
   * @apiBody {String} wins  Wins of the Team.
   *  @apiBody {String} draws  Draws of the Team.
   *  @apiBody {String} losses  Loses of the Team.
   *  @apiBody {String} ratios  Ratio of the Team.
   *  @apiBody {String} budget  Budget of the Team.
   * @apiBody {String} games  Games of the Team.
   * 

   * @apiSuccess {Object} teams Teams Array
   * @apiSuccess {String} teams.id Id of the Team.
   * @apiSuccess {String} teams.name Name of the Team.
   * @apiSuccess {String} teams.leagueId  Id of the League.
         *  @apiSuccess {String} teams.place  Place of the Team.
   * @apiSuccess {String} teams.points  Points of the Team.
   * @apiSuccess {String} teams.wins  Wins of the Team.
   *  @apiSuccess {String} teams.draws  Draws of the Team.
   *  @apiSuccess {String} teams.losses  Loses of the Team.
   *  @apiSuccess {String} teams.ratios  Ratio of the Team.
   *  @apiSuccess {String} teams.budget  Budget of the Team.
   * @apiSuccess {String} teams.games  Games of the Team.
   */
// ###############################

// ###############################
// ### DELETE - /api/team/:id
// ###############################
/**
 * @api {delete} /api/team/:id Delete by id
 * @apiName DeleteTeam
 * @apiGroup Team
 *
 * @apiParam {String} id id of the Team.
 */
// ###############################
