'use strict'
let jsonfile = require('jsonfile');

let file = process.cwd() + '/package.json';

const exec = require('child_process').exec;

jsonfile.readFile(file, function(err, obj) {
    let command = obj.shortcutjs[process.argv[2]];

    const child = exec(command,
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
})
