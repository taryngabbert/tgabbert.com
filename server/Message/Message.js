const mongoose = require('mongoose');

const Messages = mongoose.Schema(
	{
		from: {type: String},
		to: {type: Sting},
		subject: {type: String},
		text: {type: String},
		html: {type: String}
	}
)


module.exports =  mongoose.model('Messages', Messages);
