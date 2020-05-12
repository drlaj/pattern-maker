import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Stamp from "./Stamp";
import ColorPicker from "./ColorPicker";
import SelectedColor from "./SelectedColor";
import { setColor, setPixel, resetStamp } from "../actions";

const Toolbar = ({ color, pixels, setColor, setPixel, resetStamp }) => {
  return (
    <Container>
      <Stamp color={color} pixels={pixels} setPixel={setPixel} />
      <SelectedColor color={color} />
      <ColorPicker setColor={setColor} />
      <button onClick={resetStamp}>Clear</button>
    </Container>
  );
};

const Container = styled.div`
  padding-right: 20px;
`;

const mapStateToProps = (state) => ({
  color: state.colorpicker.color,
  pixels: state.stamp.pixels,
});

const mapDispatchToProps = (dispatch) => ({
  setColor: (color) => dispatch(setColor(color)),
  setPixel: (pixel) => dispatch(setPixel(pixel)),
  resetStamp: () => dispatch(resetStamp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
