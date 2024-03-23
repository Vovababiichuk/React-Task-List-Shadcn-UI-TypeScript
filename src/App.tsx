import './App.css'
import { InputWithButton } from './components/InputWithButton'
import { useState, useEffect } from 'react'
import { List } from './components/List'


function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			title: 'My first task',
			status: false,
		},
	])

	return (
		<div className='container'>
			<div className='rounded-lg border border-my-border p-4 mt-6 bg-my-bg'>
				<h1 className='text-center mb-5 text-3xl'>Note your tasks</h1>
				<div className='mb-4'>
					<InputWithButton />
				</div>
				<List tasks={tasks} />
			</div>
		</div>
	)
}

export default App
