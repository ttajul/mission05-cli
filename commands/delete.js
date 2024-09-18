const { deleteItems } = require('../db'); // Import from db.js

async function deleteItemsCommand() {
    await deleteItems();
    console.log('All auction items deleted from database!');
}

module.exports = deleteItemsCommand;