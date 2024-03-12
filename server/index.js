const { default: mongoose } = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT;
const URL = process.env.DB_URL;

mongoose.connect(URL);

const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected to mongodb server'); 
});

db.on('error', () => {
    console.log('DB connection error');
});

db.on('disconnected', () => {
    console.log('Disconnected from mongodb server');
});

app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
})