const express = require("express");
const cors = require('cors');
const app = express();
const User = require("./Model/user.model");
const userRouter = require("./Routes/user.routes");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send('Welcome to our server');
});


app.use('/api/users',userRouter);

// resource error handling
app.use((req,res,next) => {
    res.status(404).json({
        message: 'route not found'
    })
})

// server error handling
app.use((err,req,res,next) => {
    res.status(500).json({
        message: 'route not found'
    })
})

module.exports = app;