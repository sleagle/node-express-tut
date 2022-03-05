const fs = require('fs')

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return -1;
    } 
    const first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return -1;
        } 
        const second = result;
        fs.writeFileSync('./content/result-async.txt', `Here is the result: \n ${first}\n ${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return -1;
            } 
            console.log(result);
        })
    });
});



//console.log(first, second);

//fs.writeFileSync('./content/result-sync.txt', `Here is the result: \n ${first}\n ${second}`, {flag: 'a'})