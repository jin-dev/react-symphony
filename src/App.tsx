import React, { useEffect } from 'react'
import './App.css'
import styled from 'styled-components'
//import { useStore  } from './components/zustand/dataStore'
import { useStore } from './components/zustand/jsonStore'
import  Logo  from './assets/file_sharing.png';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Route, Routes} from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import DetailScreen from './pages/DetailScreen';
const StyledSection = styled.section`
    margin: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const StyledHeader = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`

const StyledSubSection = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(31, 41, 55);

`
const StyledPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


function App(): React.JSX.Element {

  //  const sampleData = useStore((state) => state.data);
    const setData = useStore((state) => state.setData);
    const jsonData = useStore((state) => state.data);
    
    async function fetchData() {
        console.log("activated API call");
        try {
            const response = await fetch('/api/links.json')
            if (!response.ok) {
                throw new Error('got error haha')
            }
            const data = await response.json()
            setData(data);
            console.log('the data is : ', data)
        } catch (e) {
            console.error('Error is : ', e)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

/*
    return (
        <StyledSection>
            <StyledHeader>
                <h1> haha header</h1>
                <BsGithub/>
                <BsLinkedin/>
            </StyledHeader>
            <StyledSubSection>
            <StyledPart><img src={Logo} alt="keyVisual"/></StyledPart>
            <StyledPart>{jsonData[0]?.created_at}</StyledPart>
            </StyledSubSection>
     

        </StyledSection>
    ) */

    return (
        <Routes>
            <Route path='/' element={<MainScreen/>}>
               
            </Route>
            <Route path='/detail/:id' element={<DetailScreen/>} />
        </Routes>
    )
}

export default App
