#!/usr/bin/env node

const { program } = require('commander');
const scaffoldExpress = require('./scaffold-express');

program
  .command('scaffold-express <projectName>')
  .description('Generate a new express project')
  .action((projectName) => {
    scaffoldExpress(projectName);
    console.log('Scaffolding express project', projectName);
  });

program.parse(process.argv);
