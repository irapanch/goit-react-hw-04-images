import { styled } from 'styled-components';

export const StyledSearchbar = styled.header`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 50px;
`;
/* ================ INPUT ====================== */
export const StyledContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 50px;
  overflow: hidden;
  vertical-align: middle;
  white-space: nowrap;
`;

// export const StyledBtn = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   /* background-image: url('https://www.svgrepo.com/show/19021/search.svg'); */
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
//   &:hover {
//     opacity: 1;
//   }
// `;

// export const StyledInput = styled.input`
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;
//   &::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
// `;
// export const StyledSpan = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;
export const StyledBtn = styled.button`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  background: #76787c;
  height: 50px;
  width: 50px;
  color: #c0c5ca;
  opacity: 0;
  font-size: 10pt;
  transition: all 0.55s ease;

  &:hover {
    background: rgb(202, 120, 120);
  }
`;
export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  background: #2b303b;
  border: none;
  font-size: 14pt;
  float: left;
  color: #fff;
  padding-left: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    color: #65737e;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #65737e;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #65737e;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #65737e;
  }
  &:hover {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }

  &:focus {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }

  &:active {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }
`;
