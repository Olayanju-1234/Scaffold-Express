#!/usr/bin/env node

const { program } = require('commander');
const scaffoldExpress = require('./scaffold-express');

program
  .version('1.2.7', '-v, --version', 'output the current version')
  .command('create <projectName>')
  .description('Create a new Express project')
  .action((projectName) => {
    scaffoldExpress(projectName);
  });

program.parse(process.argv);
