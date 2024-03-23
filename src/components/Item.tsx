import { Checkbox } from '@/components/ui/checkbox'
import { Task } from '@/TypeProps'
import { Delete } from 'lucide-react'
import { useState } from 'react'

export const Item = ({ id, title, status }: Task) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<li className='flex items-center justify-between border-b-2 border-my-accent p-2'>
			<div className='flex items-center space-x-2'>
				<Checkbox
					id='terms'
					checked={isChecked}
					onCheckedChange={() => setIsChecked(!isChecked)}
				/>
				<label
					htmlFor='terms'
					className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${
						isChecked ? 'line-through text-my-gray' : ''
					}`}
				>
					{title}
				</label>
			</div>
			<Delete size={20} color='red' />
		</li>
	)
}
