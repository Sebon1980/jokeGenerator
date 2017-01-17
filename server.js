'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});




server.route({
    method: 'GET',
    path: '/',
    handler: require('./handler/WelcomeHandler')
});

server.route({
    method: 'GET',
    path: '/joke',
    handler: require('./handler/getCategories')
});


server.route({
    method: 'GET',
    path: '/joke/{category}',
    handler: require('./handler/getJokesByCat')
});


server.route({
    method: 'GET',
    path: '/joke/random',
    handler: require('./handler/getRandomJoke')
});
server.route({
    method: 'GET',
    path: '/dbJoke',
    handler: require('./handler/getSqlCats')
})
server.route({
    method: 'GET',
    path: '/dbJoke/{category}',
    handler: require('./handler/getSqlJokeByCat')
})
server.route({
    method: 'GET',
    path: '/dbJoke/random',
    handler: require('./handler/getSqlRandomJoke')
})

server.route({
    method: 'POST',
    path: '/joke',
    handler: require('./handler/addNewJoke')
});