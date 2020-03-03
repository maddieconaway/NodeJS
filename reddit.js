let fs = require('fs');
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('https://reddit.com/r/popular.json')
    .then(res => {
        return res.json()
    })
    .then(articles => {
        let arrOut = [];

        articles.data.children.map(e => {
            let objOut = {
                title: e.data.title,
                author: e.data.author,
                url: e.data.url
            };
            arrOut.push(objOut);
        });
        //console.log(arrOut);
        let json = JSON.stringify(arrOut);
        fs.writeFile('popular-articles.json', json, function(err, result) {
            if(err) console.log('error', err);
        });
    });


