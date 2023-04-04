// ###############################
// ### GET - /api/player
// ###############################
/**
 * @api {get} /api/player/ Get All
 * @apiName GetPlayers
 * @apiGroup Player
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
// ### GET - /api/player/:id
// ###############################
/**
 * @api {get} /api/player/:id Get by id
 * @apiName GetPlayerById
 * @apiGroup Player
 *
 * @apiParam {String} id Player's unique ID.
 *
 * @apiSuccess {Object} player Player Object
 * @apiSuccess {String} player.id Id of the Player.
 * @apiSuccess {String} player.name Name of the Player.
 * @apiSuccess {String} player.teamId  Id of the Team.
 * @apiSuccess {String} player.role Role of the Player.
 * @apiSuccess {String} player.img Image of the Player.
 * @apiSuccess {String} player.kitNumber Kit Number of the Player.
 * @apiSuccess {String} player.maket_value Market value of the Player.
 *
 */
// ###############################

// ###############################
// ### POST - /api/player
// ###############################
/**
 * @api {post} /api/player/ Add player
 * @apiName CreatePlayer
 * @apiGroup Player
 *
 * @apiBody {String} name Name of the Player.
 * @apiBody {String} leagueId  Id of the League.
 * @apiBody {String} role Role of the Player.
 * @apiBody {String} players.img Image of the Player.
 * @apiBody {String} players.kitNumber Kit Number of the Player.
 * @apiBody {String} players.maket_value Market value of the Player.
 *
 * @apiSuccess {Object} player Player Object
 * @apiSuccess {String} player.id Id of the Player.
 * @apiSuccess {String} player.name Name of the Player.
 * @apiSuccess {String} player.teamId  Id of the Team.
 * @apiSuccess {String} player.role Role of the Player.
 * @apiSuccess {String} player.img Image of the Player.
 * @apiSuccess {String} player.kitNumber Kit Number of the Player.
 * @apiSuccess {String} player.maket_value Market value of the Player.
 */
// ###############################

// ###############################
// ### PUT - /api/player/:id
// ###############################
/**
 * @api {put} /api/player/:id Edit by id
 * @apiName EditPlayer
 * @apiGroup Player
 *
 * @apiParam {String} id id of the Player.
 *
 * @apiBody {String} name Name of the Player.
 * @apiBody {String} teamId  Id of the Team.
 * @apiBody {String} role Role of the Player.
 * @apiBody {String} img Image of the Player.
 * @apiBody {String} kitNumber Kit Number of the Player.
 * @apiBody {String} maket_value Market value of the Player.
 *
 *
 * @apiSuccess {Object} player Player Object
 * @apiSuccess {String} player.id Id of the Player.
 * @apiSuccess {String} player.name Name of the Player.
 * @apiSuccess {String} player.teamId  Id of the Team.
 * @apiSuccess {String} player.role Role of the Player.
 * @apiSuccess {String} player.img Image of the Player.
 * @apiSuccess {String} player.kitNumber Kit Number of the Player.
 * @apiSuccess {String} player.maket_value Market value of the Player.
 */
// ###############################

// ###############################
// ### DELETE - /api/player/:id
// ###############################
/**
 * @api {delete} /api/player/:id Delete by id
 * @apiName DeletePlayer
 * @apiGroup Player
 *
 * @apiParam {String} id id of the Player.
 */
// ###############################
