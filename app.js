#!/usr/bin/env node

const { program } = require('commander');
const scaffoldExpress = require('./scaffold-express');

program
  .version('1.1.5')
  .command('create <projectName>')
  .description('Create a new Express project')
  .action((projectName) => {
    scaffoldExpress(projectName);
  });

program.parse(process.argv);
