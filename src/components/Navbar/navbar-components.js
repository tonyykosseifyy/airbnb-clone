import styled from "styled-components" ;

const Button = styled.button`
  color: white;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.09rem;
  white-space: nowrap;
`;

export const AirbnbButton = styled(Button)`
  padding: 0px 15px;
  transition: .3s ease-out;
  font-weight: 600;
  height: 50px;
  line-height: 50px ;

  &:hover {
    background-color: #222222 ;
  }
`;

export const UserButton = styled(Button)`
  background-color: white ;
  display: flex ;
  align-items: center ;
  color: black ;
  padding: 8px 15px;
  border-radius: 40px;
  margin-left: 12px ;
`

export const Input = styled.input`
  outline: none ;
  border: none ;
  background-color: transparent;
`;

