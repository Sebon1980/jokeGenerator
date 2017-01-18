const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    var id = request.payload;
    JokeService.deleteJokeById(id).then((id) => {
        reply(id);
    });
};