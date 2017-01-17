const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    JokeService.getSqlRandomJoke().then((joke) => {
        reply(joke);
    });
}