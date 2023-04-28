import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  border-color: #0099cc;
  border-radius: 8px;
  outline: none;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #730099;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background-color: #9d3109;
  }
`;
