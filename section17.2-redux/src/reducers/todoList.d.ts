export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoFilter {
  ALL = "all",
  COMPLETE = "complete",
  INCOMPLETE = "incomplete",
}

export interface TodoListState {
  items: Todo[];
  filter: TodoFilter;
}
