import styled from 'styled-components';

export const StyledloadBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: 2px solid rgb(122, 62, 62);
  color: rgb(71, 54, 54);
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: rgb(187, 170, 170);
  font-weight: 700;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: rgb(187, 170, 170);
    background-color: hsl(0, 43.61702127659573%, 63.13725490196078%);
  }
  &:focus {
    color: rgb(187, 170, 170);
    background-color: rgb(202, 120, 120);
  }
`;
