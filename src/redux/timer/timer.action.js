import timerTypes from "./timer.types";

export const setCountDownSecond = (time) => ({
  type: timerTypes.SET_TIME,
  payload: time,
});
