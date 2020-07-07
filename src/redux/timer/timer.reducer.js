import timerTypes from "./timer.types";

const initialState = {
  countDownSecond: 0,
  countToZeroFlag: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case timerTypes.SET_TIME:
      return {
        ...state,
        countDownSecond: action.payload,
        countToZeroFlag: false,
      };

    default:
      return state;
  }
};

export default timerReducer;
