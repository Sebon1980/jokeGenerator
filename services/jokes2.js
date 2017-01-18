const JokeService = {};
const boom = require('boom');
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'JokeGenTest'
    }
});


JokeService.getSqlCats = function() {
    return new Promise((fulfill, reject) => {
        sqlCom = knex.select('catID', 'catName', 'catUrl').from('categories').timeout(1000)
            .then((a) => {
                dbCats = a;
                fulfill(dbCats);
            });
    });
};

JokeService.getSqlJokeByCat = function(cat) {
    return new Promise((fulfill, reject) => {
        selectedCat = knex.select('catID').from('categories').where('catName', cat).timeout(1000)
        sqlCom = knex.select('jokeTxt').from('jokes').where('catID', selectedCat).timeout(1000)
            .then((a) => {
                dbJoke = a;
                fulfill(dbJoke[Math.floor(Math.random() * dbJoke.length)].jokeTxt);
            });
    });
};

JokeService.getSqlRandomJoke = function() {
    return new Promise((fulfill, reject) => {
        knex.select('catID').from('categories').timeout(1000)
            .then((catIds) => {
                let catId = catIds[Math.floor(Math.random() * catIds.length)].catID;
                knex.select('jokeTxt').from('jokes').where('catID', catId).timeout(1000)
                    .then((dbJoke) => {
                        fulfill(dbJoke[Math.floor(Math.random() * dbJoke.length)].jokeTxt);
                    });
            });
    });
};

JokeService.newSqlCat = function(cat) {
    dbCats = knex.select('catName').from('categories');
    if (!dbCats.includes(cat)) {
        knex('categories').insert({ catName: cat, catUrl: 'Anonym:3000/dbJoke/' + cat })
    } else {
        alert('Category already exist!')
    }
}

JokeService.addNewJoke = function(joke) {
    console.log('service', joke)
    return new Promise((fulfill, reject) => {
        knex('jokes').insert({ catID: joke.catId, jokeTxt: joke.text })
            .then((result) => {
                fulfill(result);
                console.log('db', result)
            }).catch(e => {
                reject(e);
                console.log('error', e);
            });
    })
}

JokeService.getJokeById = function(id) {

};


module.exports = JokeService;