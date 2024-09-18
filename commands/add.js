const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const { addItems } = require('../db'); 

async function addItemsCommand() {
    let keepAdding = true;
    let items = [];

    while (keepAdding) {
        const newItem = await promptForItem();
        items.push(newItem);

        keepAdding = (await prompt('Add another item? (y/n): ')).toLowerCase() === 'y';
    }

    await addItems(items); // Add to MongoDB
    console.log('Auction items added successfully!');
}

async function promptForItem() {
    let newItem = {};
    newItem.title = await prompt('Enter title: ');
    newItem.description = await prompt('Enter description: ');
    newItem.start_price = parseFloat(await prompt('Enter starting price: '));
    newItem.reserve_price = parseFloat(await prompt('Enter reserve price: '));
    return newItem;
}

async function prompt(message) {
    return new Promise((resolve) => {
        readline.question(message, (answer) => {
            resolve(answer.toString());
        });
    });
}

module.exports = addItemsCommand;