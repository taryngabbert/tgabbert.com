const messageCtrl = require('./messageCtrl')

module.exports=app=> {
	app.post('/api/messages', messageCtrl.sendMessage)
}
