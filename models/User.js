const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		thoughts: [ThoughtSchema],
		friends: [UserSchema],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	},
);

userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;