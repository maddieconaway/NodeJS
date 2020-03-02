let path = require('path');
let fs = require('fs');
let request = require('request');
let rp = require('request-promise');

let datafile = path.join(__dirname, '../chirps.json');
let arr = [
    {
        name: 'maddie',
        date: '2/3/20 15:30',
        text: 'are you ready to go?'
    },
    {
        name: 'karen',
        date: '2/3/20 15:31',
        text: 'i am not going.'
    },
    {
        name: 'maddie',
        date: '2/3/20 15:32',
        text: 'okay, what is wrong?'
    },
    {
        name: 'karen',
        date: '2/3/20 15:37',
        text: 'linda called. AGAIN. she is going to be there. i am not going'
    },
    {
        name: 'maddie',
        date: '2/5/20 10:18',
        text: 'i went. had a good time. linda says hello.'
    }];

fs.appendFileSync(datafile, JSON.stringify(arr));

fs.readFile(datafile, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
        let chirpArr = JSON.parse(jsonString);
        console.log(chirpArr);

    } catch (err) {
        console.log('Error parsing JSON string:', err)
    }

})

