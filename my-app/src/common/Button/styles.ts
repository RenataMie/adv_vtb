import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#2e186a"};
  color: ${(p) => (p.color ? "#00000" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 3px solid orange;
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
  margin-top: 0.625rem;
  margin-right: 1rem;
  height: 150px;
  transition: all 0.3s ease-in-out;
  /* box-shadow: 0 16px 30px rgb(23 31 114 / 20%); */

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid orange;
    background-color: orange;
  }

  @media only screen and (max-width: 414px) {
          width: 100%;
          height: auto;
        }
`;

