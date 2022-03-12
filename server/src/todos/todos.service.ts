// import all necessary interfaces
import { HydratedDocument } from "mongoose";
import { TodoModel } from "../models/Todo";
import { Todo } from "./todos.interface";
import { Request, Response } from "express";

// service methods

export const readTodos = async (req: Request, res: Response): Promise<void> => {
	//whether user need sorted data by priority
	const { sort } = req.query;

	try {
		let todos;
		if (!sort) todos = await TodoModel.find();
		else todos = await TodoModel.find().sort({ priority: 1 });
		res.status(200).json({ data: todos });
	} catch (e) {
		res.status(500).send(e.message);
	}
};
export const UpdateTodo = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const newTodo = req.body;
	try {
		const result = await TodoModel.findByIdAndUpdate(id, newTodo, {
			new: true,
		});
		res.status(200).json({ data: result });
	} catch (e) {
		res.status(500).send(e.message);
	}
};

export const deleteTodo = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;

	try {
		const result = await TodoModel.findByIdAndDelete(id);
		res.status(200).json({ data: result });
	} catch (e) {
		res.status(500).send(e.message);
	}
};

export const createTodo = async (
	req: Request,
	res: Response
): Promise<void> => {
	const newTodo = req.body;
	//validate new todo

	const doc: HydratedDocument<Todo> = new TodoModel(newTodo);
	try {
		const result = await doc.save();
		res.status(200).json({ data: result });
	} catch (e) {
		res.status(500).send(e.message);
	}
};
