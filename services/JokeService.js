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

    catList = [];

    for (var prop in jokes) {
        i = 0;
        title = Object.keys(jokes);
        url = jokes[prop][0].url;
        var catInfo = { title: title[i], url: url };
        catList.push(catInfo);
        i++;
    }
    return catList;
}

JokeService.getJokesByCat = function getJokesByCat(cat) {
    sizeOfJoke = jokes[cat].length;
    rJoke = Math.floor(Math.random() * sizeOfJoke);

    return jokes[cat][rJoke].text;
}

JokeService.getRandomJoke = function getRandomJoke() {
    categories = Object.keys(jokes);
    sizeOfCat = categories.length;
    rCat = categories[Math.floor(Math.random() * sizeOfCat)];
    sizeOfJoke = jokes[rCat].length;
    rJoke = Math.floor(Math.random() * sizeOfJoke);

    return jokes[rCat][rJoke].text;
}

module.exports = JokeService;