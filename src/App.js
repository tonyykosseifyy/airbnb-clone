import React from "react";
import "./style.css";
import { Navbar } from "./components" ;
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
    </AppWrapper>
  );
}


export default App ;


const AppWrapper = styled.main`
  background-color: black ;
  min-height: 100vh ;
`