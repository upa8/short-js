#!/usr/bin/env node
'use strict'
let jsonfile = require('jsonfile');

let file = process.cwd() + '/package.json';

const exec = require('child_process').exec;

if( process.argv[2] != null){
    jsonfile.readFile(file, function(err, obj) {
        if( obj.shortcutjs[process.argv[2]] != null){
            let command = obj.shortcutjs[process.argv[2]];

            const child = exec(command,
                (error, stdout, stderr) => {

                    console.log(`${stdout}`);
                    console.log(`${stderr}`);

                    if (error !== null) {
                        console.log(`exec error: ${error}`);
                    }
                });
        }else{
            console.log('Command does not exits');
        }
    })
}else{
    console.log('Please enter valid second parameter');
}
