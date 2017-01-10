const JokeService = require('../services/JokeService');

module.exports = function(request, reply) {
    var response = JokeService.getJokeByCat(request.params.category);
    reply(response);
}