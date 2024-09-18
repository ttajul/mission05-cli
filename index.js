#!/usr/bin/env node

const { program } = require('commander');
const addItemsCommand = require('./commands/add');
const deleteItemsCommand = require('./commands/delete');

program
    .command('add')
    .description('Add auction items to the database')
    .action(addItemsCommand);

program
    .command('delete')
    .description('Delete all auction items from the database')
    .action(deleteItemsCommand);

program.parse();