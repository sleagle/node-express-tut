const fs = require('fs')

console.log('started a first task');
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return -1;
    }
    console.log(result)
    console.log('completed first task');
});

console.log('starting next task');