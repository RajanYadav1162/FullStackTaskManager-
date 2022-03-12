import { Todo } from "../types/types";
import { instance } from "./http-common";

class TodoApi {
	getAllTodos() {
		return instance.get("/");
	}
	createTodo(todo: Todo) {
		return instance.post("/", todo);
	}
	deleteTodo(id: string | undefined) {
		return instance.delete("/" + id);
	}
	updateTodo(id: string | undefined, todo: Todo) {
		return instance.put("/" + id, todo);
	}
	markDoneTodo(id: string | undefined, completed: boolean | undefined) {
		return instance.put("/" + id, { completed: completed });
	}
}

export default new TodoApi();
