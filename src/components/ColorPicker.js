import React from "react";
import styled from "styled-components";

const pickerColors = [
  { color: "black" },
  { color: "grey" },
  { color: "white" },
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "yellow" },
  { color: "orange" },
  { color: "pink" },
];

const ColorPicker = ({ setColor }) => {
  const onClick = (e) => {
    setColor(e.target.dataset.color);
  };

  return (
    <Picker>
      {pickerColors.map((pickerColor, idx) => {
        return (
          <Swatch key={idx} data-color={pickerColor.color} onClick={onClick} />
        );
      })}
    </Picker>
  );
};
const Picker = styled.div`
  width: 100px;
  border: 2px solid black;
`;

const Swatch = styled.div`
  background-color: ${(props) => props["data-color"]};
  width: 100px;
  height: 20px;
`;

export default ColorPicker;
