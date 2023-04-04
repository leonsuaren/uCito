import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sppiner = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  border-right: 5px solid #1bbc9b;
  border-left: 5px solid #1bbc9b;
  border-top: 5px solid #1bbc9b;
  border-bottom: none;
  animation: sppiner-rotation 1s linear infinite;
  @keyframes sppiner-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;