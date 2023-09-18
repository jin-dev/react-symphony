import React, { Fragment, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 120px;
`

function App(): React.JSX.Element {
    async function fetchData() {
        try {
            const response = await fetch('/api/links.json')

            if (!response.ok) {
                throw new Error('got error haha')
            }
            const data = await response.json()
            console.log('the data is : ', data)
        } catch (e) {
            console.error('Error is : ', e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <StyledButton />
            <div>haha1221</div>
        </>
    )
}

export default App
