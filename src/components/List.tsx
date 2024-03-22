import { Item } from './Item'


export const List = ({ tasks }) => {
	console.log(tasks)
	return (
		<ul>
			{tasks.map(task => {
				return(
					<Item key={task.id} {...task} />
				)
			})}
		</ul>
	);
};
