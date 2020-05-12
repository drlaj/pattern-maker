export const setColor = (color) => ({
  type: "SET_COLOR",
  color,
});

export const setPixel = (pixel) => ({
  type: "SET_PIXEL",
  id: pixel.id,
  color: pixel.color,
});

export const resetStamp = () => ({
  type: "RESET_STAMP",
});
