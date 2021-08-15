import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding-top:35px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 90%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  

  @media screen and (min-width: 1024px) {
    width: 100%;
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: -35px;

    button:first-child {
    margin-left: 5px;
  }
  }
  
 
`;
