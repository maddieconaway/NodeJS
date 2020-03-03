
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('https://reddit.com/r/popular.json')
    .then(res => {
        return res.json()
    })
    .then(articles => {
        articles.data.children.map(e => {
            console.log(`Title: ${e.data.title}`);
            console.log(`    Author: ${e.data.author}`);
            console.log(`    Url: ${e.data.url}`);
        })
    });


