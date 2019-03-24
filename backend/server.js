let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let apiRoutes = require("./api-routes");
let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost:27017');
let db = mongoose.connection;
let port = process.env.PORT || 8000;
let corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res) => console.log("Root endpoint"));

app.listen(port, function () {
    console.log("Running RestAPI on port " + port);
});