// ###############################
// ### GET - /api/nation
// ###############################
  /**
   * @api {get} /api/nation Get All nations
   * @apiName GetNations
   * @apiGroup Nation
   * @apiSuccess {Object[]} nations List of Nations.
   * @apiSuccess {String} nations.id Id of the Nation.
   * @apiSuccess {String} nations.name Name of the Nation.
   */
// ###############################

// ###############################
// ### GET - /api/nation/:id
// ###############################
  /**
   * @api {get} /api/nation/:id Get Nation by Id
   * @apiName GetNationById
   * @apiGroup Nation
   * 
   * @apiParam {String} id Nation's unique ID.
   *
   * @apiSuccess {Object} nation Nation Object
   * @apiSuccess {String} nation.id Id of the Nation.
   * @apiSuccess {String} nation.name Name of the Nation.
   */
// ###############################

// ###############################
// ### GET - /api/nation/:id/league
// ###############################
  /**
   * @api {get} /api/nation/:id/league Get Leagues by nation ID
   * @apiName GetLeagueByNationId
   * @apiGroup Nation
   *
   * @apiParam {String} id Nation's unique ID.
   *
   * @apiSuccess {Array} nation Nation Object
   * @apiSuccess {String} nation.id Id of the Nation.
   * @apiSuccess {String} nation.name Name of the Nation.
   * 
   */
// ###############################


// ###############################
// ### POST - /api/nation
// ###############################
  /**
   * @api {post} /api/nation Create Nation model
   * @apiName CreateNation
   * @apiGroup Nation
   *
   * @apiSuccess {Object} nation Nation Object
   * @apiSuccess {String} nation.id Id of the Nation.
   * @apiSuccess {String} nation.name Name of the Nation.
   */
// ###############################



// ###############################
// ### PUT - /api/nation/:id
// ###############################
  /**
   * @api {put} /api/nation/:id Update Nation
   * @apiName PutNation
   * @apiGroup Nation
   *
   * @apiParam {String} id Id of the Nation
   *
   * @apiBody {Object} body Body Object;
   * @apiBody {String} body.name Name of the Nation.
   *
   * @apiSuccess {Object} nation Nation Object
   * @apiSuccess {String} nation.id Id of the Nation.
   * @apiSuccess {String} nation.name Name of the Nation.
   */
// ###############################

// ###############################
// ### DELETE - /api/nation
// ###############################
  /**
   * @api {delete} /api/nation/:id Delete League
   * @apiName DeleteNation
   * @apiGroup Nation
   *
   * @apiParam {String} id Id of the Nation
   *
   * @apiSuccess {Object} nation Nation Object
   * @apiSuccess {String} nation.message Success Message.
   */
// ###############################