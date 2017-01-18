const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    JokeService.getSqlJokeById(request.params.id).then((id) => {
        reply(id);
    });
}