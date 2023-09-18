import React, { useEffect } from 'react'
import './App.css'
import styled from 'styled-components'

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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
        <StyledSection>
            <StyledButton />
            <div>haha1221</div>
        </StyledSection>
    )
}

export default App
