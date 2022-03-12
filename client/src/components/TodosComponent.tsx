import { Title, Box } from "@mantine/core";
import { useEffect, useState } from "react";
import { Todo } from "../types/types";
import LoadingComponent from "./LoadingComponent";
import TodoComponent from "./TodoComponent";

const TodosComponent = ({
	todos,
	deleteTodo,
	updateTodo,
	markDone,
	currentSelectedTab,
}: {
	todos: Todo[];
	deleteTodo: (id: string | undefined) => void;
	updateTodo: (todo: Todo) => void;
	markDone: (id: string | undefined, completed: boolean | undefined) => void;
	currentSelectedTab: number | undefined;
}) => {
	const [todosSelecter, setCurrentTodosSelector] = useState<Todo[]>(todos);

	useEffect(() => {
		selector();
	}, [todos]);

	const selector = () => {
		if (currentSelectedTab === 0) setCurrentTodosSelector(todos);
		else if (currentSelectedTab === 1)
			setCurrentTodosSelector(todos.filter((todo) => todo.completed === false));
		else
			setCurrentTodosSelector(todos.filter((todo) => todo.completed === true));
	};
	if (!todos) return <LoadingComponent />;

	return (
		<Box>
			{todos &&
				todosSelecter.map((todo) => (
					<TodoComponent
						key={todo._id}
						todo={todo}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						markDone={markDone}
					/>
				))}

			{todosSelecter.length === 0 && (
				<Title mt={16} order={3}>
					Nothing here!
				</Title>
			)}
		</Box>
	);
};

export default TodosComponent;
