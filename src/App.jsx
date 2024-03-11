import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const changeName = (input) => {
        if(input) {
            setName(input)
            setNewName('')
        }
    }

    return ( 
        <div>
            <h2>Teacher name: {name}</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input type='text' value={newName} placeholder='Add a name' onChange={(input) => setNewName(input.target.value)}/>
                <button onClick={() => changeName(newName)}>Change</button>
            </form>
        </div>
        // <div>
        //     <h2>Teacher name: {name}</h2>
        //     <ul>
        //         <li onClick={() => setName('Data')}>Data</li>
        //         <li onClick={() => setName('Reyes')}>Reyes</li>
        //         <li onClick={() => setName('Yolanda')}>Yolanda</li>
        //     </ul>
        // </div>
    )
}

export default App
