import './App.css'
import { InputWithButton } from './components/InputWithButton'
// import {useState, useEffect} from 'react'

function App() {
	return (
		<div className='container'>
			<div className='rounded-lg border border-my-border p-4 mt-6'>
				<h1 className='text-center mb-5 text-3xl'>Note your tasks</h1>
				<div>
					<InputWithButton />
				</div>
			</div>
		</div>
	)
}

export default App
