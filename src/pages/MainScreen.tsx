import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../components/zustand/jsonStore'
import  Logo  from '.././assets/file_sharing.png';

import { CustomizedTable } from '../components/CustomizedTable';
import { convertFileSize, expirationTime  } from '../components/utility/calculator';
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
const StyledSubTitle = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    font-size:22px;
    font-weight: 600;
`

const StyledSubSection = styled.section`
    width: 90%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledPart2 = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
interface FilteredItems { 
    subject: string;
    key: string;
    count: number;
    size: number;
    expires_at : number;
    recipients : number;
}

const MainScreen = () => {

  //  const sampleData = useStore((state) => state.data);
    const setData = useStore((state) => state.setData);
    const jsonData = useStore((state) => state.data);
    const [filtered, setFiltered] = useState<FilteredItems[]>([]);

    async function fetchData() {
        //console.log("activated API call");
        try {
            const response = await fetch('/api/links.json')
            if (!response.ok) {
                throw new Error('got error haha')
            }
            const data = await response.json()
            setData(data);


            const filteredArray: FilteredItems[] = data.map((item : any) => ({
                subject: item.sent.subject,
                key: item.key,
                count: item.count,
                size: convertFileSize(item.size),
                expires_at: expirationTime(item.expires_at),
                recipients: item.sent?.emails?.length
            }));

            setFiltered(filteredArray);

            console.log('the data is : ', data)

            console.log("The filtered : ,", filteredArray);
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
                <h1>Part. I</h1>
            </StyledHeader>
            <StyledSubSection>
                <StyledPart2>
                <StyledSubTitle>My Links</StyledSubTitle>
                <CustomizedTable tableData = {filtered}/>
                </StyledPart2>
            </StyledSubSection>
       
      
        </StyledSection>
    ) 

   
}

export default MainScreen
