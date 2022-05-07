import { createSelector } from "reselect";
import { CalculateDateState } from "./CalculateDateModels";

export const selectResults = (state: any): Array<number> => state.calculateDate.results;

export const selectTemp = createSelector(
  selectResults,
  (results) => {
    return results;
  }
)