import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../components/zustand/jsonStore';
import styled from 'styled-components'
import { convertFileSize } from '../components/utility/calculator';
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

const StyledSubSection2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid white;
    width: 100%;
`
const StyledSubSection2_1 = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`

const StyledSubSection3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid blue;
    width: 100%;
`
const StyledSubSection3_1 = styled.div`
    display: flex;
    width:50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 100%;
`

const StyledSubSection4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid red;
    width: 100%;
`

const StyledSubSection5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid red;
    width: 100%;
`

const StyledSubSection = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(31, 41, 55);

`

const DetailScreen = (props : any) => {
  const {id } = useParams();
  const jsonData = useStore((state) => state.data);
  const filteredData = jsonData.filter((item) => item.key === id);

  const fileData = filteredData[0]?.files;

  console.log("props : ", props)
  console.log("The id : ", id)
  console.log("The zustand : " , jsonData)
  console.log("The filtered : ", filteredData);
  console.log("the file :", fileData);
  return (
    <StyledSection>
       <StyledHeader>
                <h1> Detailed</h1>
      </StyledHeader>
      <StyledSubSection>
        <StyledSubSection2>
          <StyledSubSection2_1>
        <div>{filteredData[0]?.sent.subject}</div>
        <div>{filteredData[0].key}</div>
        </StyledSubSection2_1>
        <button onClick={() => alert('downloaded')}>Downlodad</button>
        </StyledSubSection2>

        <StyledSubSection3>
          <StyledSubSection3_1>
          <div>
            <div>Link Creation Date</div>
            <div>{new Date(filteredData[0].created_at * 1000).toLocaleDateString()}</div>
          </div>
          <div>
            <div>Content</div>
            <div>{filteredData[0].sent.content}</div>
          </div>
          <div>
            <div>Download Count</div>
            <div>{filteredData[0].download_count}</div>
          </div>
          </StyledSubSection3_1>
        <StyledSubSection3_1>
          <img style={{width:'50%'}} src={filteredData[0].thumbnailUrl} alt='thumbnail'/>
        </StyledSubSection3_1>
        </StyledSubSection3>

        <StyledSubSection4>
          <div>Total {filteredData[0].download_count} file</div>
          <div> {convertFileSize(filteredData[0].size)}</div>
        </StyledSubSection4>
        <StyledSubSection5>
          <div>
          <img style={{width: '30%'}} src={fileData[0]?.thumbnailUrl} />
          <div>{fileData[0]?.name}</div>
          </div>
          <div>{convertFileSize(fileData[0]?.size)}</div>
        </StyledSubSection5>
      </StyledSubSection>
    </StyledSection>
    
  )
}

export default DetailScreen