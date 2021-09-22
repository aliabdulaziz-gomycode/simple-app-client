import { useState, useEffect } from 'react'

function App() {
    const [serverStatus, setServerStatus] = useState('')

    async function data() {
        try {
            const response = await fetch('http://localhost:3300/')
            const data = await response.text()
            setServerStatus(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { data() }, [])

    return (
        <h1>
            Server message: 
            <span style={{ color: 'green', padding: '0 10px' }}>
                {serverStatus}
            </span>
        </h1>
    );
}

export default App;
