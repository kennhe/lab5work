let express = require('express');
let app = express()
// let morgan = require('morgan');
let bodyParser = require('body-parser');

let taskdb = [];
app.listen(8080);


// app.use(express.static('public')); //Specify this line for static files that are located within the PC 
app.use(express.static('images'));
app.use(express.static('htmlfiles'));
app.use(express.static('css'));

// app.use(morgan('common'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'views',  __dirname);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.render('index.html', {
    });

});

app.get('/listtasks.html', function(req, res) {
    res.render('listtasks.html', { db: taskdb});  
    
});

app.get('/newtask.html', function(req, res) {
    res.render('newtask.html', {});  
    
});

app.get('/index.html', function (req, res) {
    res.render('index.html', {
    });

});

app.post('/data', function (req, res) {
    console.log('I got a post request');
    let taskAdd = req.body.taskName;
    let dateAdd = req.body.dueDate;
    let descAdd = req.body.taskDesc;
    let newRec = {
        task: taskAdd,
        date: dateAdd,
        desc: descAdd
    }
    taskdb.push(newRec);
    console.log(taskdb);
})