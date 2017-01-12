const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    JokeService.getSqlCats().then((cats) => {
        reply(cats);
    });
}