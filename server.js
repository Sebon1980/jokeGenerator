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
    path: '/joke',
    handler: require('./handler/getSqlCats')
})
server.route({
    method: 'GET',
    path: '/joke/{category}',
    handler: require('./handler/getSqlJokeByCat')
})
server.route({
    method: 'GET',
    path: '/joke/random',
    handler: require('./handler/getSqlRandomJoke')
})

server.route({
    method: 'POST',
    path: '/joke',
    handler: require('./handler/addNewJoke')
});

server.route({
    method: 'GET',
    path: '/joke/getJoke/{id}',
    handler: require('./handler/getSqlJokeById')
})
server.route({
    method: 'GET',
    path: '/joke/getCat/{id}',
    handler: require('./handler/getSqlCatById')
})

server.route({
    method: 'POST',
    path: '/joke/deleteJoke',
    handler: require('./handler/deleteJokeById')
})