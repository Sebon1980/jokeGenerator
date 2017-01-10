const JokeService = require('../services/JokeService');

module.exports = function(request, reply) {
    var response = JokeService.getRandomJoke();
    reply(response);
}