// ###############################
// ### GET - /api/player
// ###############################
/**
 * @api {get} /api/player/ Get All Players
 * @apiName GetPlayers
 * @apiGroup Player
 *
 * @apiSuccess {Array} players Players Array
 * @apiSuccess {String} players.id Id of the Player.
 * @apiSuccess {String} players.name Name of the Player.
 * @apiSuccess {String} players.teamId  Id of the Player.
 */
// ###############################

// ###############################
// ### GET - /api/player/:id
// ###############################
/**
 * @api {get} /api/player/:id Get Player by id
 * @apiName GetPlayerById
 * @apiGroup Player
 *
 * @apiParam {String} id Player's unique ID.
 *
 * @apiSuccess {String} id Id of the Player.
 * @apiSuccess {String} name Name of the Player.
 * @apiSuccess {String} teamId  Id of the Team.
 * @apiSuccess {String} role Role of the player.
 *
 */
// ###############################

// ###############################
// ### POST - /api/player
// ###############################
/**
 * @api {post} /api/player/ Create new player
 * @apiName CreatePlayer
 * @apiGroup Player
 *
 * @apiBody {String} name Name of the Player.
 * @apiBody {String} leagueId  Id of the League.
 * @apiBody {String} role Role of the Player.
 *
 * @apiSuccess {Object} player Player Object
 * @apiSuccess {String} player.id Id of the Player.
 * @apiSuccess {String} player.name Name of the Player.
 * @apiSuccess {String} player.teamId  Id of the Team.
 * @apiSuccess {String} role Role of the player.
 */
// ###############################

// ###############################
// ### PUT - /api/player/:id
// ###############################
/**
 * @api {put} /api/player/:id Edit Player by id
 * @apiName EditPlayer
 * @apiGroup Player
 *
 * @apiParam {String} id id of the Player.
 *
 * @apiBody {String} name Name of the Player.
 * @apiBody {String} teamId  Id of the Team.
 * @apiBody {String} role Role of the Player.
 *
 * @apiSuccess {Object} player Player object
 * @apiSuccess {String} player.id Id of the League.
 * @apiSuccess {String} player.name Name of the League.
 * @apiSuccess {String} player.teamId  Id of the Nation.
 * @apiSuccess {String} role Role of the Player.
 */
// ###############################

// ###############################
// ### DELETE - /api/player/:id
// ###############################
/**
 * @api {delete} /api/player/:id Delete player by id
 * @apiName DeletePlayer
 * @apiGroup Player
 *
 * @apiParam {String} id id of the Player.
 */
// ###############################
