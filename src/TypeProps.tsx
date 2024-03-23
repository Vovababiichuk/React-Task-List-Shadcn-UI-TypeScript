export type Task = {
  id: string;
  title: string;
  status: string;
}

export type ListProps = {
  tasks: Task[];
}