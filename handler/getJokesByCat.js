const JokeService = require('../services/JokeService');

module.exports = function(request, reply) {
    var response = JokeService.getJokesByCat(request.params.category);
    reply(response);
}