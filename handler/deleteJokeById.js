const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    JokeService.deleteJokeById(request.payload).then((id) => {
        reply(id);
    });
};