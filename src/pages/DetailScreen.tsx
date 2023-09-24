import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '@components/zustand/jsonStore';
import { convertFileSize } from '@components/utility/calculator';
import { BsDownload } from 'react-icons/bs';
import { DataItem, FileItem } from '@type/types';
import { StyledSection, StyledHeader, StyledColumntitle,
  StyledSubSection2, StyledSubSection2_1, StyledSubSection2_btn,
  StyledSubSection3, StyledSubSection3_1, StyledSubSection3_2,StyledSubSection4,
  StyledSubSection4_a, StyledSubSection5, StyledSubSection5_1,
  UnderLineText, MainHeader, StyledSubSection  } from '@components/styles/StyledComponentsDetail';

const DetailScreen = () => {
  const {id } = useParams();
  const jsonData = useStore((state) => state.data);

  //Filter data based on the 'id' parameter from URL
  const filteredData: DataItem[] = jsonData.filter((item) => item.key === id); 
  const navigate = useNavigate();
  const fileData: FileItem[] = filteredData[0]?.files || [];

  useEffect(() => {
    //Rediret to main page if there is no data for the given ID
    if (filteredData.length ===0) navigate('/');
  }, [])

  // Render the detail page if there is filtered data, otherwise it renders nothing.
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
        <StyledSubSection2_btn onClick={() => alert('downloaded')}> <BsDownload/> Downlodad</StyledSubSection2_btn>
        </StyledSubSection2>

        <StyledSubSection3>
          <StyledSubSection3_1>
          <div>
            <StyledColumntitle>Link Creation Date</StyledColumntitle>
            <div>{new Date(filteredData[0].created_at * 1000).toLocaleDateString()}</div>
          </div>
          <div>
            <StyledColumntitle>Content</StyledColumntitle>
            <div>{filteredData[0].sent.content}</div>
          </div>
          <div>
            <StyledColumntitle>Download Count</StyledColumntitle>
            <div>{filteredData[0].download_count}</div>
          </div>
          </StyledSubSection3_1>
        <StyledSubSection3_2>
          <img style={{width:'50%', height:'90%',backgroundColor:'#dedcd9', padding:'5px 15px'}} src={filteredData[0].thumbnailUrl} alt='thumbnail'/>
        </StyledSubSection3_2>
        </StyledSubSection3>

        <StyledSubSection4>
          <StyledSubSection4_a>
          <StyledColumntitle>Total {filteredData[0].download_count} file</StyledColumntitle>
          <StyledColumntitle> {convertFileSize(filteredData[0].size)}</StyledColumntitle>
          </StyledSubSection4_a>
        </StyledSubSection4>
        <StyledSubSection5>
          <StyledSubSection5_1>
          <img style={{width: '10%', height: '10%', paddingRight:'15px'}} src={fileData[0]?.thumbnailUrl} />
          <div>{fileData[0]?.name}</div>
          </StyledSubSection5_1>
          <StyledColumntitle>{convertFileSize(fileData[0]?.size)}</StyledColumntitle>
        </StyledSubSection5>
      </StyledSubSection>
    </StyledSection>
    : null
  )
}

export default DetailScreen