export interface BaseTodo {
	title: string;
	completed: Boolean;
	priority: "high" | "low" | "medium";
	createdAt: Date;
}

export interface Todo extends BaseTodo {
	id: number;
}
