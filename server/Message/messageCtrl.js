const Messages = require('./Message')

module.exports = {
	sendMessage(req, res, next) {
		new Messages(req.body).save( (err, message) => {
			if (err) {return res.status(500).json(err); }
			return res.status(200).json(message)
		})
	}
}
