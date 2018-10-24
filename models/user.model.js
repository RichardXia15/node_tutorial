
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    gender: { type: 'String' },
	name: { 
        title: { type: 'String' },
		first: { type: 'String' },
		last: { type: 'String' }
	},
	email: { type: 'String' },
	registered: {
		date: { type: 'Date' },
		age: { type: 'Number' }
	},
	picture: { type: 'String' }
});

module.exports = mongoose.model('User', UserSchema);