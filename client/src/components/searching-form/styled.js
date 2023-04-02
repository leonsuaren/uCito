import styled from 'styled-components';

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  box-shadow: 5px 5px 5px #cccccc;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
`;

export const AutocompleteInput = styled.input`
  padding: 0 20px;
  height: 50px;
  font-size: 1.2rem;
  overflow: hidden;
  border-top: none;
  border-left: none;
  border-bottom: blue;
  box-shadow: 5px 5px 5px #cccccc;
`;

export const Suggestions = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-align: left;
  height: 30px;
  padding: 5px;
  &:hover {
    background-color: darkgray;
  }
`;

export const CitiesDisplay = styled.div`
  width: 40%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 5px 5px 5px #cccccc;
  position: absolute;
  z-index: 1;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
`;