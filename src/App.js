import { useState, useEffect } from 'react'

function App() {
    const [serverStatus, setServerStatus] = useState('')

    async function data() {
        try {
            const url = 'https://murmuring-meadow-11163.herokuapp.com/'
            const response = await fetch(url)
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
