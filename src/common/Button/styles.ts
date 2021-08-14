import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "grey"};
  color: ${(p) => (p.color ? "grey" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 80%;
  border: 3px solid #383838;
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
  margin-top: 0.625rem;
  margin-right: 1rem;
  height: 120px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: white !important;
    border: 1px solid #383838;
    background-color: #686868;
  }

  @media only screen and (max-width: 414px) {
          width: 100%;
          height: auto;
        }
`;


