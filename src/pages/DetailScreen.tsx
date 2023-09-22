import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../components/zustand/jsonStore';
import styled from 'styled-components'

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

const DetailScreen = (props : any) => {
  const {id } = useParams();
  const jsonData = useStore((state) => state.data);
  const filteredData = jsonData.filter((item) => item.key === id);
  console.log("props : ", props)
  console.log("The id : ", id)
  console.log("The zustand : " , jsonData)
  console.log("The filtered : ", filteredData);
  return (
    <StyledSection>
       <StyledHeader>
                <h1> Detailed</h1>
      </StyledHeader>
      <StyledSubSection>
        <div>
        <div>{jsonData[0]?.sent.subject}</div>
        <div>{jsonData[0].key}</div>
        <button>Downlodad</button>
        </div>

        <div>
          <div>Link Creation Date</div>
          <div>{jsonData[0].created_at}</div>
          <div>Content</div>
          <div>{jsonData[0].sent.content}</div>
          <div>Download Count</div>
          <div>{jsonData[0].download_count}</div>
        </div>

        <div>
          <img style={{width:'50%'}} src={jsonData[0].thumbnailUrl} alt='thumbnail'/>
        </div>

        <div>
          <div>Total {jsonData[0].download_count} file</div>
         
        </div>
      </StyledSubSection>
    </StyledSection>
    
  )
}

export default DetailScreen