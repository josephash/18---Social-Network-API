const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users } = require('./seedData');

connection.on('error', (err) => err);

connection.once('open', async () => {

	// await User.deleteMany({});
	// await Thought.deleteMany({});

	await User.collection.insertMany(users);
	process.exit(0);
});