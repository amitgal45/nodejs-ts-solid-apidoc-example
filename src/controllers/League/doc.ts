// ###############################
// ### GET - /api/league
// ###############################
/**
 * @api {get} /api/league Get All
 * @apiName GetLeagues
 * @apiGroup League
 * @apiSuccess {Object[]} leagues       List of user leagues.
 * @apiSuccess {String} leagues.id Id of the League.
 * @apiSuccess {String} leagues.name Name of the League.
 * @apiSuccess {String} leagues.nationId  Id of the Nation.
 */
// ###############################

// ###############################
// ### GET - /api/league/:id
// ###############################
/**
   * @api {get} /api/league/:id Get by Id
   * @apiName GetLeague
   * @apiGroup League
   *
   * @apiParam {String} id League's unique ID.
   *
   * @apiSuccess {Object} league League Object
   * @apiSuccess {String} league.id Id of the League.
   * @apiSuccess {String} league.name Name of the League.
   * @apiSuccess {String} league.nationId  Id of the Nation.

   */
// ###############################

// ###############################
// ### GET - /api/league/:id/team
// ###############################
/**
   * @api {get} /api/league/:id/team Get Teams by id
   * @apiName GetLeagueTeams
   * @apiGroup League
   *
   * @apiParam {String} id League's unique ID.
   *
   * @apiSuccess {Array} teams Teams Array
   * @apiSuccess {Object} teams.team Team Object
   * @apiSuccess {String} teams.team.id Id of the Team.
   * @apiSuccess {String} teams.team.name Name of the League.
   * @apiSuccess {String} teams.team.leagueId  Id of the League.
   * @apiSuccess {String} teams.team.place  Place of the Team.
   * @apiSuccess {String} teams.team.points  Points of the Team.
   * @apiSuccess {String} teams.team.wins  Wins of the Team.
   * @apiSuccess {String} teams.team.draws  Draws of the Team.
   * @apiSuccess {String} teams.team.losses  Loses of the Team.
   * @apiSuccess {String} teams.team.ratios  Ratio of the Team.
   * @apiSuccess {String} teams.team.budget  Budget of the Team.
   * @apiSuccess {String} teams.team.games  Games of the Team.

   */
// ###############################

// ###############################
// ### POST - /api/league
// ###############################
/**
 * @api {post} /api/league Add league
 * @apiName PostLeague
 * @apiGroup League
 *
 * @apiBody {String} name Name of the League.
 * @apiBody {String} nationId  Id of the Nation.
 *
 * @apiSuccess {Object} league League Object
 * @apiSuccess {String} league.id Id of the League.
 * @apiSuccess {String} league.name Name of the League.
 * @apiSuccess {String} league.nationId  Id of the Nation.
 */
// ###############################

// ###############################
// ### PUT - /api/league/:id
// ###############################
/**
 * @api {put} /api/league/:id Edit by id
 * @apiName PutLeague
 * @apiGroup League
 *
 * @apiParam {String} id Id of the league
 *
 * @apiBody {String} name Name of the League.
 * @apiBody {String} nationId  Id of the Nation.
 *
 * @apiSuccess {Object} league League Object
 * @apiSuccess {String} league.id Id of the League.
 * @apiSuccess {String} league.name Name of the League.
 * @apiSuccess {String} league.nationId  Id of the Nation.
 */
// ###############################

// ###############################
// ### DELETE - /api/league
// ###############################
/**
 * @api {delete} /api/league/:id Delete by id
 * @apiName DeleteLeague
 * @apiGroup League
 *
 * @apiParam {String} id Id of the league
 *
 * @apiSuccess {Object} league League Object
 * @apiSuccess {String} league.message Success Message.
 */
// ###############################
