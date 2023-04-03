
// ###############################
// ### GET - /api/team
// ###############################
    /**
   * @api {get} /api/team/ Get All Teams
   * @apiName GetTeams
   * @apiGroup Team
   *
   * @apiSuccess {Array} teams Teams Array
   * @apiSuccess {String} teams.id Id of the Team.
   * @apiSuccess {String} teams.name Name of the Team.
   * @apiSuccess {String} teams.leagueId  Id of the League.
   */
// ###############################


// ###############################
// ### GET - /api/team/:id
// ###############################
      /**
   * @api {get} /api/team/:id Get Team by id
   * @apiName GetTeamById
   * @apiGroup Team
   *
   * @apiParam {String} id Team's unique ID.
   *
   * @apiSuccess {String} id Id of the Team.
   * @apiSuccess {String} name Name of the Team.
   * @apiSuccess {String} leagueId  Id of the League.

   */
// ###############################

// ###############################
// ### GET - /api/team/:id/player
// ###############################
      /**
   * @api {get} /api/team/:id/player Get Players by team id
   * @apiName GetPlayersByTeamId
   * @apiGroup Team
   *
   * @apiParam {String} id Team's unique ID.
   *
   * @apiSuccess {String} id Id of the Team.
   * @apiSuccess {String} name Name of the Team.
   * @apiSuccess {String} leagueId  Id of the League.

   */
// ###############################


// ###############################
// ### POST - /api/team
// ###############################
    /**
   * @api {post} /api/team/ Create new team
   * @apiName AddTeam
   * @apiGroup Team
   * 
   * @apiBody {String} name Name of the Team.
   * @apiBody {String} leagueId  Id of the League.
   *
   * @apiSuccess {Object} teams Teams Array
   * @apiSuccess {String} teams.id Id of the Team.
   * @apiSuccess {String} teams.name Name of the League.
   * @apiSuccess {String} teams.leagueId  Id of the League.
   */
// ###############################

// ###############################
// ### PUT - /api/team/:id
// ###############################
    /**
   * @api {put} /api/team/:id Edit team by id
   * @apiName EditTeam
   * @apiGroup Team
   * 
    * @apiParam {String} id id of the Team.
   * 
   * @apiBody {String} name Name of the Team.
   * @apiBody {String} leagueId  Id of the League.
   *
   * @apiSuccess {Object} teams Teams Array
   * @apiSuccess {String} teams.id Id of the Team.
   * @apiSuccess {String} teams.name Name of the Team.
   * @apiSuccess {String} teams.leagueId  Id of the League.
   */
// ###############################

// ###############################
// ### DELETE - /api/team/:id
// ###############################
    /**
   * @api {delete} /api/team/:id Delete team by id
   * @apiName DeleteTeam
   * @apiGroup Team
   * 
   * @apiParam {String} id id of the Team.
   */
// ###############################