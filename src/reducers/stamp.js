const stampSize = 25;
const defaultColor = "red";

const getInitialState = () => {
  const pixels = [];
  for (var i = 0; i < stampSize; i++) {
    pixels.push({
      id: i,
      color: defaultColor,
    });
  }
  return {
    pixels: pixels,
  };
};

const stamp = (state = getInitialState(), action) => {
  switch (action.type) {
    case "RESET_STAMP":
      return {
        pixels: state.pixels.map((pixel) => {
          return { ...pixel, color: defaultColor };
        }),
      };
    case "SET_PIXEL":
      return {
        pixels: state.pixels.map((pixel) => {
          return pixel.id === action.id
            ? { ...pixel, color: action.color }
            : pixel;
        }),
      };
    default:
      return state;
  }
};

export default stamp;
