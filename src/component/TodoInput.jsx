import { useState } from "react"
import './component.css'

function TodoInput({addTask}) {
    const [userInput, setUserInput] = useState('');


    const handleKey = (e) => {
        if (e.key === 'Enter') {
            addTask(userInput);
            setUserInput('');
        }
    };
    return (
        <div>
            <input
                className = 'todo'
                placeholder = 'add new task...'
                type="text"
                value={userInput}
                onKeyPress = {handleKey}
                onChange={(e) => setUserInput(e.target.value)}
            />
        </div>
    )
}

export default TodoInput
