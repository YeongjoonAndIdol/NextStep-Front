import { atom } from "recoil";

export const WeekState = atom({
  key: "weekState",
  default: {
    weekValue: "",
    checkValue: false,
  },
});
