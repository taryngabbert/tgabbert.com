const messageRoutes = require('./Message/messageRoutes.js')
module.exports = app => {
	messageRoutes(app);
}
