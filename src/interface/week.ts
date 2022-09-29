interface OptionArrType {
  option: string;
  value: TSort;
}

export interface WeekProps {
  options: Array<OptionArrType>;
  value: string;
  onChangeValue: (value: string) => void;
}

export type TSort = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
