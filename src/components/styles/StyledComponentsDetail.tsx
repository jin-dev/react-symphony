import styled from "styled-components";

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
`
export const StyledHeader = styled.div`
    width: 100%;
    padding-top:50px;
    display:flex;
    justify-content: center;
`
export const StyledColumntitle = styled.div`
  font-size:16px;
  font-weight:600;
  color:lightgray;
  opacity: 0.8;
`

export const StyledSubSection2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    align-items: center;
    width: 100%;
    border-bottom: 1px solid lightslategray;
    border-left:1px solid rgb(31, 41, 55);
    border-right:1px solid rgb(31, 41, 55);
`
export const StyledSubSection2_1 = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
`

export const StyledSubSection2_btn = styled.button`
background-color: #1fd190;
width:120px;
height:50px;
border-radius: 10px;
cursor: pointer;
  
`

export const StyledSubSection3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px 0;
    width: 100%;
`
export const StyledSubSection3_1 = styled.div`
    display: flex;
    width:50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding:10px;
   
    width: 100%;
`

export const StyledSubSection3_2 = styled.div`
    display: flex;
    width:50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
   
    width: 100%;
`

export const StyledSubSection4 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:40px;
    border-top: 1px solid lightslategray;
    border-bottom: 1px solid lightslategray;
   
`

export const StyledSubSection4_a = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  width: 90%;
`

export const StyledSubSection5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    width: 90%;
`
export const StyledSubSection5_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const UnderLineText = styled.div`
  text-decoration: underline;
`

export const MainHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
`

export const StyledSubSection = styled.section`
    width: 80%;
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