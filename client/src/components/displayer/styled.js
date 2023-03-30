import styled, { css } from 'styled-components';

const commonWrapperStyled = css`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 5px;
`;

export const CitiesWrapper = styled.div`
@media (min-width: 320px) and (max-width:480px ) {
  grid-template-columns: repeat(2, 1fr);
  ${commonWrapperStyled};
}

@media (min-width: 481px) and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  ${commonWrapperStyled};
}

@media (min-width: 769px) and (max-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
  ${commonWrapperStyled};
}

@media (min-width: 1025px) {
  grid-template-columns: repeat(3, 1fr);
  ${commonWrapperStyled};
}
`;

export const CitiesCard = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 3px 3px #CCCCCC;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
