const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auction_app'); // Remove the deprecated options
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Auction Item Schema
const AuctionItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    start_price: {
        type: Number,
        required: true,
    },
    reserve_price: {
        type: Number,
        required: true,
    },
});

const AuctionItem = mongoose.model('AuctionItem', AuctionItemSchema);

// Function to add items to the database
const addItems = async (items) => {
    await connectDB(); 
    try {
        await AuctionItem.insertMany(items);
        console.log('Auction items added to database.');
    } catch (error) {
        console.error('Error adding items:', error.message);
    } finally {
        mongoose.disconnect();
    }
};

// Function to delete all items from the database
const deleteItems = async () => {
    await connectDB(); 
    try {
        await AuctionItem.deleteMany({});
        console.log('All auction items deleted from database.');
    } catch (error) {
        console.error('Error deleting items:', error.message);
    } finally {
        mongoose.disconnect();
    }
};

module.exports = { connectDB, addItems, deleteItems };