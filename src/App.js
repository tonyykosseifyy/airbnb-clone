import React from "react";
import "./style.css";
import { Navbar , ReactdatesDatepicker } from "./components" ;
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <ReactdatesDatepicker />
    </AppWrapper>
  );
}


export default App ;


const AppWrapper = styled.main`
  background-color: #222222 ;
  min-height: 100vh ;
`