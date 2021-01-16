const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');

//body-parser for post request
const bodyParser = require('body-parser');
// getting-started.js
const mongoose = require('mongoose');

//Changing the React app to read JSON data from the Node/Express server
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//specifying where are: built and static folders 
app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json npm start
app.use(bodyParser.json())

//connection with mongoDb through constant ConnectionString
const myConnectionString = 'mongo "mongodb+srv://cluster0.z6uzw.mongodb.net/cars" --username admin1';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//defindig Schema of the datatype that I want to store in the database and the GUI on the Database
const Schema = mongoose.Schema;
let carSchema = new Schema({
    reg: String,
    make: String,
    model: String
});
//interaction with database
let CarModel = mongoose.model("cars", carSchema);

//returns the following JSON data when a GET request is made to /api/cars
app.get('/api/cars', (req, res) => {

    //model that pass no arguments but will find all the database and send it back
    CarModel.find((err, data) => {
        res.json(data);
    })
})
//listen for the http request that has delete method
app.delete('/api/cars/:id', (req, res) => {
    console.log("Delete " + req.params.id);

    //find record by the id and delete then return back some data when is deleted
    CarModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);
        console.log('Deleted');//report to console
        res.send(data);
    })
})
//returns the following JSON data when a GET request is made to /api/cars/id and return as url
app.get('/api/cars/:id', (req, res) => {
    console.log(req.params.id);
    //method that will listen for get (4000/api/cars/:id) and returned back the cars that has at that id
    CarModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//method that listen for put that has /api/movoes/:id url 
app.put('/api/cars/:id', (req, res) => {
    console.log("Update car: " + req.params.id);
    console.log(req.body);

    //Asynchronised call into database finding record within id and update and send back some data
    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//post request at /api/cars that is taking the body that is passed up and included
app.post('/api/cars', (req, res) => {
    console.log('Car Recieved!');
    console.log(req.body.reg);
    console.log(req.body.make);
    console.log(req.body.model);

    CarModel.create({
        reg: req.body.reg,
        make: req.body.make,
        model: req.body.model
    })
    //send message item added
    res.send('item Added');
})
//all other roots send index.html file back
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})
app.listen(port, () => {// app listen at port 4000
    console.log(`Example app listening at http://localhost:${port}`)
})