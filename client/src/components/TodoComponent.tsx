import { Box, Checkbox, createStyles } from "@mantine/core";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Todo } from "../types/types";
const TodoComponent = ({
	todo,
	deleteTodo,
	updateTodo,
	markDone,
}: {
	todo: Todo;
	deleteTodo: (id: string | undefined) => void;
	updateTodo: (todo: Todo) => void;
	markDone: (id: string | undefined, completd: boolean | undefined) => void;
}) => {
	const { classes } = useStyles();
	const [checked, setIsChecked] = useState(todo.completed);
	const deleteTodoHandler = (id: string | undefined) => {
		deleteTodo(id);
	};
	const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.currentTarget.checked);
		markDone(todo._id, checked);
	};
	return (
		<Box className={classes.todoContainer}>
			<Box className={classes.todoTitle}>
				<Checkbox
					size="md"
					label={todo.title}
					checked={checked}
					onChange={onchangeHandler}
				/>
			</Box>
			<Box>
				<BsPencilSquare
					className={classes.editIcon}
					onClick={() => updateTodo(todo)}
				/>
				<RiDeleteBin4Line
					className={classes.deleteIcon}
					onClick={() => deleteTodoHandler(todo._id)}
				/>
			</Box>
		</Box>
	);
};

const useStyles = createStyles((theme) => ({
	todoContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		padding: theme.spacing.sm,
	},
	deleteIcon: {
		marginLeft: theme.spacing.sm,
		cursor: "pointer",
	},
	editIcon: {
		cursor: "pointer",
	},
	todoTitle: {
		maxWidth: "70%",
	},
}));

export default TodoComponent;
