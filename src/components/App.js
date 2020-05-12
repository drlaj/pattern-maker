import React from "react";
import styled from "styled-components";

import PatternGenerator from "./PatternGenerator";

function App() {
  return (
    <Container>
      <PatternGenerator></PatternGenerator>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
