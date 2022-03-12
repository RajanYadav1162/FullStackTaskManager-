export interface Todo {
	_id?: string | undefined;
	title: string;
	completed?: boolean;
	priority?: "low" | "high";
}
