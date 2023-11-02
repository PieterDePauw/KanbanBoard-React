import { Id, Task } from "../types";

export interface TaskCardProps {
	task: Task;
	deleteTask: (id: Id) => void;
	updateTask: (id: Id, content: string) => void;
}

