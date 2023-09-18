import React, { useEffect } from 'react'
import './App.css'

function App(): React.JSX.Element {
    async function fetchData() {
        await fetch('/api/links.json').then((res) => {
            console.log('the result : ', res.json())
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>haha</div>
}

export default App
