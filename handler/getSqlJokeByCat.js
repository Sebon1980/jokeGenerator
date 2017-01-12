const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    JokeService.getSqlJokeByCat(request.params.category).then((joke) => {
        reply(joke);
    });
}