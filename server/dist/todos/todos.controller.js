"use strict";
/**
 * Required External Modules and Interfaces
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const todos_service_1 = require("./todos.service");
/**
 * Router Definition
 */
exports.todosRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
// GET todos
exports.todosRouter.get("/", todos_service_1.readTodos);
// POST todos
exports.todosRouter.post("/", todos_service_1.createTodo);
// PUT todos/:id
exports.todosRouter.put("/:id", todos_service_1.UpdateTodo);
// DELETE todos/:id
exports.todosRouter.delete("/:id", todos_service_1.deleteTodo);
