const JokeService = require('../services/jokes2');

module.exports = function(request, reply) {
    var joke = request.payload;
    console.log('handler', joke)
    JokeService.addNewJoke(joke).then((joke) => {
        reply(joke);
    });

};