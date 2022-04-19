import React from 'react'
import DirectChat from './DirectChat';
import './App.css';

//Using arrow function component
const App = () => {
  return (
    <ChatEngine
			userName='harsh'
			userSecret='harsh123'
			projectID='4f02cf7c-0e7e-428e-b4a1-a1ff2b446797'
		/>
    <DirectChat/>
  )
}

export default App


