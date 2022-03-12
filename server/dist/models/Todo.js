"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    title: { type: String, required: false, maxlength: 30 },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ["low", "high"], default: "low" },
    createdAt: { type: Date, default: Date.now },
});
exports.TodoModel = (0, mongoose_1.model)("Todo", todoSchema);
