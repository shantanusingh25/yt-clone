import dotenv from "dotenv" // importing dotenv file
import { config } from 'dotenv'; // importing confile form dotenv
config(); // configuring the enviroentmal variables
import app from "./app.js"; //importing the app file form app.js
import connectDB from "./db/index.db.js"; // importing the function which connects to database


connectDB() // invoking functoin to connect to database.
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.on('error' , (err) => {
            console.error(`The following error ${err} was faced in file [[index.js]]`)
        }) // checking for any error
        app.listen(PORT , () => {
            console.log(`⨗⨗ The app is being served at localhost://${PORT}`);
        }); // making the server to serve
    })
    .catch((err) => {
        console.error(`MongoDB connection failed at file [[index.js]] Error : ${err}`);
    }); // catching the error, if any.