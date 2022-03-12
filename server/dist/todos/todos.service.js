"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.deleteTodo = exports.UpdateTodo = exports.readTodos = void 0;
const Todo_1 = require("../models/Todo");
// service methods
const readTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //whether user need sorted data by priority
    const { sort } = req.query;
    try {
        let todos;
        if (!sort)
            todos = yield Todo_1.TodoModel.find();
        else
            todos = yield Todo_1.TodoModel.find().sort({ priority: 1 });
        res.status(200).json({ data: todos });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.readTodos = readTodos;
const UpdateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newTodo = req.body;
    try {
        const result = yield Todo_1.TodoModel.findByIdAndUpdate(id, newTodo, {
            new: true,
        });
        res.status(200).json({ data: result });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.UpdateTodo = UpdateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Todo_1.TodoModel.findByIdAndDelete(id);
        res.status(200).json({ data: result });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.deleteTodo = deleteTodo;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = req.body;
    //validate new todo
    const doc = new Todo_1.TodoModel(newTodo);
    try {
        const result = yield doc.save();
        res.status(200).json({ data: result });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.createTodo = createTodo;
