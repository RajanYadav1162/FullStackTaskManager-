import { Container } from "@mantine/core";
import { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import LoadingComponent from "./components/LoadingComponent";
import NotificationComponent from "./components/NotificationComponent";
import TabComponent from "./components/TabComponent";
import TodosComponent from "./components/TodosComponent";
import { Todo } from "./types/types";
import todoApi from "./utils/todoApi";

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [input, setInput] = useState<string>("");
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [editTargetTodo, setEditTargetTodo] = useState<Todo>();
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [showNotification, setShowNotification] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState("");
	const addTodo = async () => {
		setIsLoading(true);
		await todoApi.createTodo({ title: input });
		setIsLoading(false);
		setNotificationMessage("New Todo Created!");
		setShowNotification(true);
	};

	const deleteTodo = async (id: string | undefined) => {
		setIsLoading(true);
		await todoApi.deleteTodo(id);
		setIsLoading(false);
		setNotificationMessage("Todo deleted!...");
		setShowNotification(true);
	};

	const getTodos = async () => {
		const { data } = await todoApi.getAllTodos();
		setTodos(data.data);
	};
	const updateTodo = (todo: Todo) => {
		setInput(todo.title);
		setIsUpdate((prev) => {
			return !prev;
		});
		setEditTargetTodo(todo);
	};

	const onAddHandler = () => {
		addTodo();
		setInput("");
	};
	const onTabChange = (tab: number) => {
		setCurrentTab(tab);
	};
	useEffect(() => {
		if (isLoading) return;
		setIsLoading(true);
		getTodos();
		setIsLoading(false);
		setShowNotification(false);
	}, [isLoading, currentTab]);

	const onChange = (currentInput: String) => {
		setInput(currentInput as string);
	};

	const editHandler = () => {
		startUpdate();
	};
	const startUpdate = async () => {
		setIsLoading(true);
		await todoApi.updateTodo(editTargetTodo?._id, { title: input });
		setIsLoading(false);
		setIsUpdate(false);
		setInput("");
		setNotificationMessage("Todo Updated...!");
		setShowNotification(true);
	};

	const markDoneHandler = async (
		id: string | undefined,
		completed: boolean | undefined
	) => {
		await todoApi.markDoneTodo(id, !completed);
		setNotificationMessage("Todo mark done...!");
		setShowNotification(true);
	};

	return (
		<Container mt={10}>
			<InputComponent
				autofocus={true}
				invalid={false}
				placeholder="Enter your new Task..."
				size="md"
				variant="default"
				value={input}
				onChange={onChange}
				onEnter={onAddHandler}
			/>
			{isUpdate ? (
				<ButtonComponent
					color="teal"
					title="Edit"
					size="md"
					onClick={editHandler}
					input={input}
				/>
			) : (
				<ButtonComponent
					color="grape"
					title="Add"
					size="md"
					onClick={onAddHandler}
					input={input}
				/>
			)}
			<TabComponent onTabChange={onTabChange} currentTab={currentTab} />

			{isLoading ? (
				<LoadingComponent />
			) : (
				<TodosComponent
					todos={todos}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}
					markDone={markDoneHandler}
					currentSelectedTab={currentTab}
				/>
			)}
			{showNotification && (
				<NotificationComponent notificationTitle={notificationMessage} />
			)}
		</Container>
	);
};

export default App;
