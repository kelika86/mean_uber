const express=require ('express');
const app= express();
const bodyParser=require('body-parser');
app.use(express.static(__dirname + '/public/dist/public'));

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose'); //don't have to say mongoose.js
require('./server/config/routes')(app);// being sent from routes.js to be able to send that app

app.listen(8000, ()=>console.log('On 8000'));