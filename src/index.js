import dotenv from "dotenv" // importing dotenv file
import { config } from 'dotenv'; // importing confile form dotenv
config(); // configuring the enviroentmal variables
import connectDB from "./db/index.db.js"; // importing the function which connects to database


connectDB(); // invoking functoin to connect to database.
