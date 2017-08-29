# Short-js

Command line utility to save shortcut commands


## Objective behind creating this tool

As a developer, we execute various commands in a folder. We have to type all those commands everytime. Sometimes commands are too long. Sometime we even forget the long commands.

This tool solves this problem.


## Install

```
$ npm install --global shortjs
```


## Usage

```
#add following code in package.json file

{
  "shortjs":{
    "n": "mkdir new-folder",
    "i": "ipconfig"
  }
}

#To execute ipconfig command in command prompt in that folder

$s i

#To execute mkdir new-folder

$s n

```

## Note

You can add as many commands  as you want.
This tool can be used for any project where you can add package.json file


## Status
This project is still under development.
Suggestions, constuctive feebacks are welcomed.


## License

MIT © Shortjs(https://github.com/upa8)