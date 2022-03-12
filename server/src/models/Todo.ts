import { Schema, model } from "mongoose";
import { Todo } from "../todos/todos.interface";

const todoSchema = new Schema<Todo>({
	title: { type: String, required: false, maxlength: 30 },
	completed: { type: Boolean, default: false },
	priority: { type: String, enum: ["low", "high"], default: "low" },
	createdAt: { type: Date, default: Date.now },
});

export const TodoModel = model<Todo>("Todo", todoSchema);
