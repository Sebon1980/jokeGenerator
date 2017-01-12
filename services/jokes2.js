const JokeService = {};
const boom = require('boom');


var jokes = [{
        "title": "chuck",
        "url": "Anonym:3000/joke/chuck",
        "jokeList": [
            'Chuck Norris hat bis zur Unendlichkeit gezählt ... 2-mal.',
            'Chuck Norris hat alle Farben erfunden. Außer Rosa! Tom Cruise hat Rosa erfunden.',
            'Chuck Norris kann ein Feuer entfachen, indem er zwei Eiswürfel aneinander reibt.',
        ]
    },
    {
        "title": "vandamme",
        "url": "Anonym:3000/joke/vandamme",
        "jokeList": [
            'Jemand hat Chuck Norris einmal mit Jean-Claude van Damme verglichen…einmal!',
            'Einmal trat Jean-Claude Van Damme Chuck Norris in den Hintern. Dann wurde er mit einem Roundhouse-Kick aus seinem Traum geweckt.',
            'Was hat Jean-Claude Van Damme einem durchschnittlichen Kreditvertrag voraus? „Mehr Durchschläge!“.'
        ]
    },
    {
        "title": "mudda",
        "url": 'Anonym:3000/joke/mudda',
        "jokeList": [
            'Wenn deine Mutter sich auf die Waage stellt, siehst du deine Handynummer!',
            'Was ist der Unterschied zwischen deiner Mutter und Shrek? – Der Bart.',
            'Warum kann deine Mutter nicht auf dem Bauch schlafen? – Richtig, sie hat Höhenangst.'
        ]
    }
];
JokeService.getCategories = function getCategories() {
    categories = [];
    for (var i = 0; i < jokes.length; i++) {
        cat = { "title": jokes[i].title, "url": jokes[i].url };
        categories.push(cat);
    }
    return categories;
}

JokeService.getJokesByCat = function getJokesByCat(cat) {
    var joke;
    for (i = 0; i < jokes.length; i++) {
        if (jokes[i].title === cat) {
            joke = jokes[i].jokeList[rJokeMath.floor(Math.random() * jokes[i].jokeList.length)]
            return joke;
        }
    }
    return boom.badRequest('Category doesn´t exist!');
}

JokeService.getRandomJoke = function getRandomJoke() {
    rJoke = jokes[Math.floor(Math.random() * jokes.length)].jokeList[Math.floor(Math.random() * jokes[Math.floor(Math.random() * jokes.length)].jokeList.length)];
    return rJoke;
}

module.exports = JokeService;