/**
 * Required External Modules and Interfaces
 */

import express from "express";
import { readTodos, createTodo, UpdateTodo, deleteTodo } from "./todos.service";

/**
 * Router Definition
 */

export const todosRouter = express.Router();

/**
 * Controller Definitions
 */

// GET todos
todosRouter.get("/", readTodos);

// POST todos

todosRouter.post("/", createTodo);

// PUT todos/:id

todosRouter.put("/:id", UpdateTodo);
// DELETE todos/:id

todosRouter.delete("/:id", deleteTodo);
