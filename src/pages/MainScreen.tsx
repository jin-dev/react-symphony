import { useEffect, useState } from 'react';
import { useStore } from '@components/zustand/jsonStore';
import { CustomizedTable } from '@components/CustomizedTable';
import { convertFileSize, expirationTime } from '@components/utility/calculator';
import {StyledSection, StyledHeader, StyledSubSection, StyledPart2, StyledSubTitle } from '@components/styles/StyledComponents';
import { FilteredItems, JsonData } from '@type/types';

const MainScreen = () => {
  const setData = useStore((state) => state.setData);
  const [filtered, setFiltered] = useState<FilteredItems[]>([]);

  async function fetchData() {
    try {
      const response = await fetch('/api/links.json');
      if (!response.ok) {
        throw new Error('There is an error');
      }
      const data = await response.json();
      setData(data);

      const filteredArray: FilteredItems[] = data.map((item: JsonData) => ({
        subject: item.sent.subject,
        key: item.key,
        count: item.count,
        size: convertFileSize(item.size),
        expires_at: expirationTime(item.expires_at),
        recipients: item.sent?.emails?.length || 0
      }));

      setFiltered(filteredArray);
    } catch (e) {
      console.error('Error:', e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledSection>
      <StyledHeader>
        <h1>Part. I</h1>
      </StyledHeader>
      <StyledSubSection>
        <StyledPart2>
          <StyledSubTitle>My Links</StyledSubTitle>
          <CustomizedTable tableData={filtered} />
        </StyledPart2>
      </StyledSubSection>
    </StyledSection>
  );
};

export default MainScreen;