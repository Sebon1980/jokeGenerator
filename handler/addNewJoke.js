const newJoke = require('../services/jokes2');

module.exports = function(request, reply) {
    var joke = request.payload;
    reply(joke.text);
};