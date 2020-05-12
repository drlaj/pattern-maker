import React from "react";
import styled from "styled-components";

const SelectedColor = ({ color }) => <Swatch color={color}></Swatch>;

const Swatch = styled.div`
  width: 100px;
  height: 40px;
  margin: 20px 0;
  border: 2px solid black;
  background-color: ${(props) => props.color};
`;

export default SelectedColor;
