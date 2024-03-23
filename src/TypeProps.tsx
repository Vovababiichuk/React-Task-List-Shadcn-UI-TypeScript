export type Task = {
  id: number;
  title: string;
  status: boolean;
}

export type ListProps = {
  tasks: Task[];
}