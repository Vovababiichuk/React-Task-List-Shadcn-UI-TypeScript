import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function InputWithButton() {
	const [taskTitle, setTaskTitle] = useState('')

	const handleAddTaskEnter = e => {
		if (e.key === 'Enter' && e.target.value !== '') {
			e.preventDefault()
			console.log(taskTitle)
		}
	}

  const handleAddTask = () => {
    if (taskTitle !== '') {
      console.log(taskTitle)
    }
  }

	return (
		<div className='flex w-full max-w-sm items-center space-x-2'>
			<Input
				type='text'
				placeholder='Enter your task'
				value={taskTitle}
				onChange={e => setTaskTitle(e.target.value)}
				onKeyDown={handleAddTaskEnter}
			/>
			<Button type='submit' onClick={handleAddTask}>
				Add
			</Button>
		</div>
	)
}
