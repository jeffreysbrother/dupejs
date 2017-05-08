#!/usr/bin/env node
const argv = require('yargs')
  .demandCommand(2)
  .argv;
const fs = require('fs');
const shell = require('shelljs');

const existingDir = process.cwd(argv._[0]);
// const dir = process.cwd();
// console.log('(%d,%d)', argv.x, argv.y);
const newDir = argv._[1];

if (!fs.existsSync(newDir)){
    // fs.mkdirSync(newDir);
    shell.cp('-R', existingDir, newDir);
    console.log(`New directory \"${newDir}\" created`);
} else {
  console.log("That directory already exists");
}
