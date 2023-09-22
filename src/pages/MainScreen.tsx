import React, { useEffect } from 'react'
import styled from 'styled-components'
//import { useStore  } from './components/zustand/dataStore'
import { useStore } from '../components/zustand/jsonStore'
import  Logo  from '.././assets/file_sharing.png';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

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
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledPart2 = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`


const MainScreen = () => {

  //  const sampleData = useStore((state) => state.data);
    const setData = useStore((state) => state.setData);
    const jsonData = useStore((state) => state.data);
    
    async function fetchData() {
        //console.log("activated API call");
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

    return (
        <StyledSection>
            <StyledHeader>
                <h1> Nespresso</h1>
                <BsGithub/>
                <BsLinkedin/>
            </StyledHeader>
            <StyledSubSection>
                <StyledPart><img src={Logo} style={{width:'100%'}} alt="keyVisual"/></StyledPart>
                <StyledPart2>
                    <StyledList>
                        <div>Subject</div>
                        <div>Number of Files</div>
                        <div>Size</div>
                        <div>Validity Period</div>
                        <div>Recipients</div>
                    </StyledList>
                    <div>
                        <div>{jsonData[0]?.thumbnailUrl}</div>
                        <div><Link to={`/detail/${jsonData[0]?.key}`}>{jsonData[0]?.key}</Link></div>
                        <div>{jsonData[0]?.download_count}</div>

                        {jsonData[0]?.created_at}
                    </div>
                    <div>
                        <div>{jsonData[1]?.thumbnailUrl}</div>
                        <div>{jsonData[1]?.summary}</div>
                        <div>{jsonData[1]?.download_count}</div>

                        {jsonData[1]?.created_at}
                    </div>
                </StyledPart2>
            </StyledSubSection>
     

        </StyledSection>
    ) 

   
}

export default MainScreen
