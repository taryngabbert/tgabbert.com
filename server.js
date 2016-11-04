const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
const mongoose = require('mongoose');

const sessionConfig = require('./server/config/session-config');
const masterRoutes = require('./server/masterRoutes');

const app = express();
const port = 4040;

app.use( bodyParser.json() );
app.use( express.static(`${__dirname}/public`));
app.use( session (sessionConfig) );


const mongoUri = require("./server/config/mlab-config").mongoUri;
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=> {console.log(`Connected with mongo db at ${mongoUri}`)})

//Everything goes below app.use
masterRoutes(app);

app.listen(port, ()=> {
console.log(`Express is running on ${port}`);
});
