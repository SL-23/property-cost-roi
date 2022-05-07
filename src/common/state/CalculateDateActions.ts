import { createAction } from "@reduxjs/toolkit";
import { Date } from "./CalculateDateModels";

const rdn = (y: number, m: number, d: number) => {
  if (m < 3) {
    y--;
    m += 12;
  }
  return 365*y + y/4 - y/100 + y/400 + (306*m + 5)/10 + (d - 1);
}


export const getResults = createAction(
  "calculateDate/getResults",
  (start: Date, end: Date) => {
    return {
      payload: Math.ceil(rdn(end.year, end.month, end.day) - rdn(start.year, start.month, start.day)) - 1
    }
  }
)