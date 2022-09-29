import { TSort } from "../../interface/week";

interface IWeekOption {
  option: string;
  value: TSort;
}

export const weekOptions: IWeekOption[] = [
  { option: "월", value: "MON" },
  { option: "화", value: "TUE" },
  { option: "수", value: "WED" },
  { option: "목", value: "THU" },
  { option: "금", value: "FRI" },
  { option: "토", value: "SAT" },
  { option: "일", value: "SUN" },
];
