const JokeService = require('../services/JokeService');

module.exports = function(request, reply) {
    reply(JokeService.getCategories());
}