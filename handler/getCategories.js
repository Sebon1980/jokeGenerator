const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    reply(JokeService.getCategories());
}