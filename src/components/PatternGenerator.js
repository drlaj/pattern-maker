import React from "react";
import styled from "styled-components";

import Toolbar from "./Toolbar";
import Picture from "./Picture";

const PatternGenerator = () => {
  return (
    <Container>
      <Toolbar />
      <Picture />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-content: flex-start;
`;

export default PatternGenerator;
