const JokeService = {};

var jokes = {
    "chuck": [{
            "text": 'Chuck Norris hat bis zur Unendlichkeit gezählt ... 2-mal.',
            "url": 'Anonym:3000/joke/chuck'
        },
        {
            "text": 'Chuck Norris hat alle Farben erfunden. Außer Rosa! Tom Cruise hat Rosa erfunden.',
            "url": 'Anonym:3000/joke/chuck'
        },
        {
            "text": 'Chuck Norris kann ein Feuer entfachen, indem er zwei Eiswürfel aneinander reibt.',
            "url": 'Anonym:3000/joke/chuck'
        }
    ],
    "vandamme": [{
            "text": 'Jemand hat Chuck Norris einmal mit Jean-Claude van Damme verglichen…einmal!',
            "url": 'Anonym:3000/joke/vandamme'
        },
        {
            "text": 'Einmal trat Jean-Claude Van Damme Chuck Norris in den Hintern. Dann wurde er mit einem Roundhouse-Kick aus seinem Traum geweckt.',
            "url": 'Anonym:3000/joke/vandamme'
        },
        {
            "text": 'Was hat Jean-Claude Van Damme einem durchschnittlichen Kreditvertrag voraus? „Mehr Durchschläge!“.',
            "url": 'Anonym:3000/joke/vandamme'
        }
    ],
    "mudda": [{
            "text": 'Wenn deine Mutter sich auf die Waage stellt, siehst du deine Handynummer!',
            "url": 'Anonym:3000/joke/mudda'
        },
        {
            "text": 'Was ist der Unterschied zwischen deiner Mutter und Shrek? – Der Bart.',
            "url": 'Anonym:3000/joke/mudda'
        },
        {
            "text": 'Warum kann deine Mutter nicht auf dem Bauch schlafen? – Richtig, sie hat Höhenangst.',
            "url": 'Anonym:3000/joke/mudda'
        }
    ]
};


/**
 * Returns an array ov all available categories.
 * 
 */
JokeService.getCategories = function getCategories() {
    return "foo";
}

JokeService.getJokesByCat = function getJokesByCat(cat) {

    return jokes;
}

JokeService.getRandomJoke = function getRandomJoke() {
    categories = Object.keys(jokes);
    for (var obj in categories) {

    }

    return categories;
}



module.exports = JokeService;