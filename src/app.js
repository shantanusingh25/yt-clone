import express from "express"; // express module imported
import cookieParser from "cookie-parser"; //cookie-parser imported
import cors from "cors"; //cross origin resourcing. cors imported

const app = express(); // making the app

// middlewares here.

//cors do accept parameters as a object form.

const SIZE_LIMIT = '16kb'
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) // cross origin setup settings.

app.use(express.json({
    limit: SIZE_LIMIT
})) //making a limit to the json datawhich we will be recieving so that the server do not collapse

app.use(express.urlencoded({
    extended: true, //for making extended object properties
    limit: SIZE_LIMIT
})) // the use of this is for parsing the url. {URL needs to be parsed before used.}

app.use(express.static('public')) // the use to make links easily available

app.use(cookieParser()) //for parsing the cookies. Makes us perform CRUD opreations

export default app;