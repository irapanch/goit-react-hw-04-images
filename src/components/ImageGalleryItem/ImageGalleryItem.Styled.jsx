import { styled } from 'styled-components';
export const StyledItem = styled.li`
  max-width: 300px;
  border-radius: 5%;
  box-shadow: 0px 0px 10px 0px #2e2c2c;
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 5%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
