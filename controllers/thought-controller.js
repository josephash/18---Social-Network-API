const { User, Thought } = require('../models');

const thoughtController = {
	getThoughts(req, res) {
		Thought.find({})
			.then(dbThoughtData => res.json(dbThoughtData))
			.catch(err => {
				console.log(err);
				res.sendStatus(400);
			});
	},
	getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.id })
			.then(dbThoughtData => {
				if (!dbThoughtData) {
					res.status(404).json({ message: 'No thought found with this id!' });
					return;
				}
				res.json(dbThoughtData);
			});
	},
	createThought({ body }, res) {
		Thought.create(body)
			.then(dbThoughtData => res.json(dbThoughtData))
			.catch(err => res.json(err));
	},
	updateThought({ params, body }, res) {
		Thought.findOneAndUpdate(
			{ _id: params.id },
			body,
			{ new: true, runValidators: true },
		)
			.then(dbThoughtData => {
				if (!dbThoughtData) {
					res.status(404).json({ message: 'No thought found with this id!' });
					return;
				}
				res.json(dbThoughtData);
			});
	},
};

module.exports = { ...thoughtController };