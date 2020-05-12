import React from "react";
import styled from "styled-components";

const Stamp = ({ color, pixels, setPixel }) => {
  const changeColor = (id) => {
    setPixel({ id: id, color: color });
  };

  return (
    <Container>
      {pixels.map((pixel) => {
        return (
          <Pixel
            key={pixel.id}
            color={pixel.color}
            onMouseOver={() => changeColor(pixel.id)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: solid 2px black;
`;

const Pixel = styled.div`
  float: left;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  box-sizing: border-box;
`;

export default Stamp;
