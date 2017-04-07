/**
 * Created by user on 28-Mar-17.
 */
let express = require('express');
let bodyParser = require('body-parser');
let handlebars = require('express-handlebars');

let app = express();
app.use(express.static(__dirname));


let router = require('./routes');

let hostname = 'localhost';
let port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.engine('hbs',handlebars({defaultLayout : 'layout',extname:'.hbs'}));
app.set("view engine",'hbs');
app.set('views',__dirname+'/views');
app.use('/', router);


app.listen(port, hostname, () => {
    console.log(`Server started @ @ http://${hostname}:${port}`);
});