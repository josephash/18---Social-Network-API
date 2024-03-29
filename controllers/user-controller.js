const { User, Thought } = require('../models');

const userController = {
	getUsers(req, res) {
		User.find({})
			.select('-__v')
			.then(dbUserData => res.json(dbUserData))
			.catch(err => {
				console.log(err);
				res.sendStatus(400);
			});
	},
	getUserById({ params }, res) {
		User.findOne({ _id: params.id })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(400);
			});
	},
	createUser({ body }, res) {
		User.create(body)
			.then(dbUserData => res.json(dbUserData))
			.catch(err => res.json(err));
	},
	updateUser({ params, body }, res) {
		User.findOneAndUpdate(
			{ _id: params.id },
			body,
			{ new: true, runValidators: true },
		)
			.select('-__v')
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			});
	},
	deleteUser({ params }, res) {
		User.findOneAndDelete({ _id: params.id })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.json(err));
	}
};

module.exports = { ...userController };