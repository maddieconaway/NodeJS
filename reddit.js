
const fetch = require('node-fetch');

fetch('https://reddit.com/r/popular.json')
.then (res => res.text)
.then (body => {
    console.log(body);
})