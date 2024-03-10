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
            <form>
                <input type='text' value={newName} placeholder='Add a name' onChange={(input) => setNewName(input.target.value)}/>
                <div onClick={() => changeName(newName)}>Change</div>
            </form>
        </div>
        // <div>
        //     <h2>Teacher name: {name}</h2>
        //     <ul>
        //         <li onClick={() => changeName('Data')}>Data</li>
        //         <li onClick={() => changeName('Reyes')}>Reyes</li>
        //         <li onClick={() => changeName('Yolanda')}>Yolanda</li>
        //     </ul>
        // </div>
    )
}

export default App
