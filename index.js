#!/usr/bin/env node

const jsonfile = require('jsonfile');

const exec = require('child_process').exec;

const file = `${process.cwd()}/package.json`;


if (process.argv[2] != null) {
  jsonfile.readFile(file, (err, obj) => {
    if (obj.shortcutjs[process.argv[2]] != null) {
      const command = obj.shortcutjs[process.argv[2]];

      exec(command,
        (error, stdout, stderr) => {
          console.log(`${stdout}`);
          console.log(`${stderr}`);

          if (error !== null) {
            console.log(`exec error: ${error}`);
          }
        });
    } else {
      console.log('Command does not exits');
    }
  });
} else {
  console.log('Please enter valid second parameter');
}
