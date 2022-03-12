// import external modules

import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { todosRouter } from "./todos/todos.controller";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/not-found-middleware";
dotenv.config();

//  initialise app variable

if (!process.env.PORT || !process.env.MONGO_URI) {
	console.log("No ports found!");
	process.exit(1);
}

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

// app configuration

app.use(helmet());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to task manager api"));
app.use("/todos", todosRouter);
app.use(errorHandler);
app.use(notFoundHandler);
// server activation

const start = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		app.listen(PORT, () => console.log("server is running at port 5000"));
	} catch (e) {
		console.log("error while connecting to database" + e);
	}
};

start();
