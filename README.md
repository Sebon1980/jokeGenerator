# Jokegenerator

Simple API to generate jokes.
This serves as a learning project to teach me NodeJS and Hapi.

## Installation
```BASH
npm install
```

## Start 
```BASH
node server.js
```

## Handlers
### getCategoriesHandler
```BASH
handler: require('./handler/getCategoriesHandler')
```

### getJokesByCat
```BASH
handler: require('./handler/getJokesByCat')
```

### getRandomJoke
```BASH
handler: require('./handler/getRandomJoke')
```