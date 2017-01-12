const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    var response = JokeService.getJokesByCat(request.params.category);
    reply(response);
}