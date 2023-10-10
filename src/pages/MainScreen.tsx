import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '@components/zustand/jsonStore';
import { CustomizedTable } from '@components/CustomizedTable';
import { convertFileSize, expirationTime } from '@components/utility/calculator';
import { FilteredItems, JsonData } from '@type/types';
import { device } from '@src/components/styles/BreakPoints';

export const StyledSection = styled.section`
    margin: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledSubTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    font-size: 22px;
    font-weight: 600;
`;

export const StyledSubSection = styled.section`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledPart2 = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// For table component

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledSubRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
`;
export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
`;

export const CustomHeader = styled.th`
    display: flex;
    justify-content: flex-start;
    border-bottom: none !important;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.colors.yellow};
    font-size: 40px;
    @media ${device.md} {
        font-size: 32px;
    }
`;

function MainScreen(): React.JSX.Element {
    // Zustand 'useStore' hook to set data
    const setData = useStore((state) => state.setData);
    const [filtered, setFiltered] = useState<FilteredItems[]>([]);

    // get API data
    async function fetchData(): Promise<void> {
        try {
            const response = await fetch('/api/links.json');
            if (!response.ok) {
                throw new Error('There is an error');
            }
            const data = await response.json();

            // set data for global state management
            setData(data);

            // Map and convert the received data for display
            const filteredArray: FilteredItems[] = data.map((item: JsonData) => ({
                subject: item.sent.subject,
                key: item.key,
                count: item.count,
                size: convertFileSize(item.size),
                expires_at: expirationTime(item.expires_at),
                recipients: item.sent?.emails?.length || 0,
            }));

            // Set the filtered Data
            setFiltered(filteredArray);
        } catch (e) {
            console.error('An error occurred:', e); // Changed: Added a more informative error message
        }
    }

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // renders received data with table component
    return (
        <StyledSection>
            <StyledHeader>
                <Title>Part. I</Title>
            </StyledHeader>
            <StyledSubSection>
                <StyledPart2>
                    <StyledSubTitle>My Links</StyledSubTitle>
                    <CustomizedTable tableData={filtered} />
                </StyledPart2>
            </StyledSubSection>
        </StyledSection>
    );
}

export default MainScreen;
