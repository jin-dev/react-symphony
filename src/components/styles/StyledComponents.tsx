// Styled-Component for the list
import styled from "styled-components";

//For main screen
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

//For table component


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