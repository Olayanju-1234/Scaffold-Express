#!/usr/bin/env node

const { program } = require('commander');
const scaffoldExpress = require('./scaffold-express');

program
  .version('1.1.0')
  .command('scaffold-express <projectName>')
  .description('Create a new Express project')
  .action((projectName) => {
    scaffoldExpress(projectName);
  });

program.parse(process.argv);
