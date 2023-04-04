// ###############################
// ### GET - /api/nation
// ###############################
  /**
   * @api {get} /api/nation Get All
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
   * @api {get} /api/nation/:id Get by Id
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
   * @api {get} /api/nation/:id/league Get Leagues by id
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
   * @api {post} /api/nation Add nation
   * @apiName CreateNation
   * @apiGroup Nation
   * 
   * @apiBody {String} name Name of the Nation.
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
   * @api {put} /api/nation/:id Update by Id
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
   * @api {delete} /api/nation/:id Delete by Id
   * @apiName DeleteNation
   * @apiGroup Nation
   *
   * @apiParam {String} id Id of the Nation
   *
   * @apiSuccess {Object} nation Nation Object
   * @apiSuccess {String} nation.message Success Message.
   */
// ###############################