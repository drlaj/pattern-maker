const defaultPenColor = "black";

const initialState = {
  color: defaultPenColor,
};

const colorPicker = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLOR": {
      return { ...state, color: action.color };
    }
    default:
      return state;
  }
};

export default colorPicker;
