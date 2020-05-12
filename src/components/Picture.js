import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const pictureSize = 1000;
const pixelSize = 20;
const defaultPixelColor = "white";
const numberOfPixels = (pictureSize / pixelSize) * (pictureSize / pixelSize);

const Picture = ({ pixels }) => {
  const canvasPixels = [];

  for (let i = 0; i < numberOfPixels; i++)
    canvasPixels.push({
      color: defaultPixelColor,
      size: pixelSize,
    });

  for (let row = 0; row < pictureSize / pixelSize; row += 5) {
    for (let col = 0; col < pictureSize / pixelSize; col += 5) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          canvasPixels[col * 50 + row + (i * 50 + j)].color =
            pixels[i * 5 + j].color;
        }
      }
    }
  }

  return (
    <Container>
      {canvasPixels.map((pixel, idx) => {
        return <Pixel key={idx} color={pixel.color}></Pixel>;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: ${pictureSize}px;
  height: ${pictureSize}px;
  background-color: gray;
  border: 2px solid black;
`;

const Pixel = styled.div`
  width: ${pixelSize}px;
  height: ${pixelSize}px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  float: left;
  box-sizing: border-box;
`;

const mapStateToProps = (state) => ({
  pixels: state.stamp.pixels,
});

export default connect(mapStateToProps)(Picture);
