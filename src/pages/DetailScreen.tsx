import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
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
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightslategray;
    border-left:1px solid rgb(31, 41, 55);
    border-right:1px solid rgb(31, 41, 55);
`
const StyledSubSection2_1 = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
`

const StyledSubSection2_btn = styled.button`
background-color: #1fd190;
width:120px;
height:50px;
border-radius: 10px;
cursor: pointer;
  
`

const StyledSubSection3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px 0;
    width: 100%;
`
const StyledSubSection3_1 = styled.div`
    display: flex;
    width:50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    width: 100%;
`

const StyledSubSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:40px;
    border-top: 1px solid lightslategray;
    border-bottom: 1px solid lightslategray;
   
`

const StyledSubSection4_a = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  width: 90%;
`

const StyledSubSection5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    width: 90%;
`
const StyledSubSection5_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const UnderLineText = styled.div`
  text-decoration: underline;
`

const MainHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
`

const StyledSubSection = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 0;
    border-right: 1px solid lightslategray;
    border-bottom:1px solid lightslategray;
    border-left:1px solid lightslategray;

`

const DetailScreen = () => {
  const {id } = useParams();
  const jsonData = useStore((state) => state.data);
  const filteredData = jsonData.filter((item) => item.key === id);
  const navigate = useNavigate();

  const fileData = filteredData[0]?.files;

  useEffect(() => {
    filteredData.length ===0 ? navigate('/') : null;
  }, [])

  return (
    filteredData.length > 0 ? <StyledSection>
       <StyledHeader>
                <h1> Part. II</h1>
      </StyledHeader>
      <StyledSubSection>
        <StyledSubSection2>
          <StyledSubSection2_1>
        <MainHeader>{filteredData[0]?.sent.subject}</MainHeader>
        <UnderLineText>{filteredData[0].key}</UnderLineText>
        </StyledSubSection2_1>
        <StyledSubSection2_btn onClick={() => alert('downloaded')}>Downlodad</StyledSubSection2_btn>
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
          <img style={{width:'50%',backgroundColor:'#dedcd9', padding:'5px 15px'}} src={filteredData[0].thumbnailUrl} alt='thumbnail'/>
        </StyledSubSection3_1>
        </StyledSubSection3>

        <StyledSubSection4>
          <StyledSubSection4_a>
          <div>Total {filteredData[0].download_count} file</div>
          <div> {convertFileSize(filteredData[0].size)}</div>
          </StyledSubSection4_a>
        </StyledSubSection4>
        <StyledSubSection5>
          <StyledSubSection5_1>
          <img style={{width: '20%', paddingRight:'15px'}} src={fileData[0]?.thumbnailUrl} />
          <div>{fileData[0]?.name}</div>
          </StyledSubSection5_1>
          <div>{convertFileSize(fileData[0]?.size)}</div>
        </StyledSubSection5>
      </StyledSubSection>
    </StyledSection>
    : null
  )
}

export default DetailScreen