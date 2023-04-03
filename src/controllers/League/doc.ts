// ###############################
// ### GET - /api/league
// ###############################
  /**
   * @api {get} /api/league Get All leagues
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
   * @api {get} /api/league/:id Get League by Id
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
   * @api {get} /api/league/:id/team Get League Teams by leagueId
   * @apiName GetLeagueTeams
   * @apiGroup League
   *
   * @apiParam {String} id League's unique ID.
   *
   * @apiSuccess {Array} league League Object
   * @apiSuccess {String} league.id Id of the League.
   * @apiSuccess {String} league.name Name of the League.
   * @apiSuccess {String} league.nationId  Id of the Nation.

   */
// ###############################


// ###############################
// ### POST - /api/league
// ###############################
  /**
   * @api {post} /api/league Create League model
   * @apiName PostLeague
   * @apiGroup League
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
   * @api {put} /api/league/:id Update League
   * @apiName PutLeague
   * @apiGroup League
   *
   * @apiParam {String} id Id of the league
   *
   * @apiBody {Object} body Body Object;
   * @apiBody {String} body.name Name of the League.
   * @apiBody {String} body.nationId  Id of the Nation.
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
   * @api {delete} /api/league/:id Delete League
   * @apiName DeleteLeague
   * @apiGroup League
   *
   * @apiParam {String} id Id of the league
   *
   * @apiSuccess {Object} league League Object
   * @apiSuccess {String} league.message Success Message.
   */
// ###############################