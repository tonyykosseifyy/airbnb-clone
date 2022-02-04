import styled from "styled-components" ;

const Button = styled.button`
  color: white;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.09rem;
`;

export const AirbnbButton = styled(Button)`
  padding: 0px 20px;
  transition: .3s ease-out;
  font-weight: 600;
  height: 50px;
  line-height: 50px ;

  &:hover {
    background-color: #222222 ;
  }
`;

export const UserButton = styled.button`
  background-color: white ;
  display: flex ;
  align-items: center ;
`

