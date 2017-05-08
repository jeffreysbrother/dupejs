#!/usr/bin/env node
const fs = require('fs');
const shell = require('shelljs');
const argv = require('yargs')
  .demandCommand(2)
  .argv;

const dir = process.cwd();
const existingDir = dir + "/" + argv._[0];
const newDir = dir + "/" + argv._[1];

if (!fs.existsSync(newDir)){
    shell.cp('-R', existingDir, newDir);
    console.log(`New directory \"${newDir}\" created`);
    return;
} else {
  console.log(`The directory \"${argv._[1]}\" already exists`);
  return;
}
