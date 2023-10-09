import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '@components/zustand/jsonStore';
import { convertFileSize, expirationTime } from '@components/utility/calculator';
import { BsDownload } from 'react-icons/bs';
import { DataItem, FileItem } from '@type/types';

export const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        margin: 50px;
    }
`;
export const StyledHeader = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
`;
export const StyledColumntitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: lightgray;
    opacity: 0.8;
`;

export const StyledSubSection2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightslategray;
    border-left: 1px solid rgb(31, 41, 55);
    border-right: 1px solid rgb(31, 41, 55);
`;
export const StyledSubSection2A = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const StyledSubSection2Btn = styled.button`
    background-color: #1fd190;
    width: 120px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
`;

export const StyledSubSection3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
`;
export const StyledSubSection3A = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;

    width: 100%;
`;

export const StyledSubSection3B = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    width: 100%;
`;

export const StyledSubSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid lightslategray;
    border-bottom: 1px solid lightslategray;
`;

export const StyledSubSection4A = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

export const StyledSubSection5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    width: 90%;
`;
export const StyledSubSection5A = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const UnderLineText = styled.div`
    text-decoration: underline;
`;

export const MainHeader = styled.h1`
    font-size: 18px;
    font-weight: 600;
`;

export const StyledSubSection = styled.section`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 0;
    border-right: 1px solid lightslategray;
    border-bottom: 1px solid lightslategray;
    border-left: 1px solid lightslategray;
`;

function DetailScreen() {
    const { id } = useParams();
    const jsonData = useStore((state) => state.data);

    // Filter data based on the 'id' parameter from URL
    const filteredData: DataItem[] = jsonData.filter((item) => item.key === id);
    const navigate = useNavigate();
    const fileData: FileItem[] = filteredData[0]?.files || [];

    // check whether the date is expired
    const checkExpiration = expirationTime(filteredData[0].expires_at) === 'Expired';

    useEffect(() => {
        // Rediret to main page if there is no data for the given ID
        if (filteredData.length === 0) navigate('/');
    }, []);

    // Render the detail page if there is filtered data, otherwise it renders nothing.
    return filteredData.length > 0 ? (
        <StyledSection>
            <StyledHeader>
                <h1> Part. II</h1>
            </StyledHeader>
            <StyledSubSection>
                <StyledSubSection2>
                    <StyledSubSection2A>
                        <MainHeader>{filteredData[0]?.sent.subject}</MainHeader>
                        <UnderLineText>localhost/{filteredData[0].key}</UnderLineText>
                    </StyledSubSection2A>
                    <StyledSubSection2Btn onClick={() => alert('downloaded')}>
                        {' '}
                        <BsDownload /> Downlodad
                    </StyledSubSection2Btn>
                </StyledSubSection2>

                <StyledSubSection3>
                    <StyledSubSection3A>
                        <div>
                            <StyledColumntitle>Link Creation Date</StyledColumntitle>
                            <div>
                                {new Date(filteredData[0].created_at * 1000).toLocaleDateString()}
                            </div>
                        </div>
                        <div>
                            <StyledColumntitle>Content</StyledColumntitle>
                            <div>{filteredData[0].sent.content}</div>
                        </div>
                        <div>
                            <StyledColumntitle>Download Count</StyledColumntitle>
                            <div>{filteredData[0].download_count}</div>
                        </div>
                    </StyledSubSection3A>
                    <StyledSubSection3B>
                        <img
                            style={{
                                width: '50%',
                                height: '90%',
                                backgroundColor: '#dedcd9',
                                padding: '5px 15px',
                            }}
                            src={filteredData[0].thumbnailUrl}
                            alt="thumbnail"
                        />
                    </StyledSubSection3B>
                </StyledSubSection3>

                <StyledSubSection4>
                    <StyledSubSection4A>
                        <StyledColumntitle>
                            Total {filteredData[0].download_count} file
                        </StyledColumntitle>
                        <StyledColumntitle>
                            {' '}
                            {convertFileSize(filteredData[0].size)}
                        </StyledColumntitle>
                    </StyledSubSection4A>
                </StyledSubSection4>
                <StyledSubSection5>
                    <StyledSubSection5A>
                        <img
                            style={{ width: '10%', height: '10%', paddingRight: '15px' }}
                            src={fileData[0]?.thumbnailUrl}
                            alt="sampleImage"
                        />
                        <div>{fileData[0]?.name}</div>
                    </StyledSubSection5A>
                    <StyledColumntitle>
                        {checkExpiration ? <div>Expired</div> : convertFileSize(fileData[0]?.size)}
                    </StyledColumntitle>
                </StyledSubSection5>
            </StyledSubSection>
        </StyledSection>
    ) : null;
}

export default DetailScreen;
