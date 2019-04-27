const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");

//initialize express
const app = express();

//configure express to parse json
app.use(express.json());

// connect to mongodb
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true, 
    useCreateIndex: true}).then(() => {
        console.log("Mongoose Connected");
    })
    .catch(err=> console.log(err)
    );

//settup PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


