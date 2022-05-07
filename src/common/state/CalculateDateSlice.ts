import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getResults, CalculateDateState } from "./";

const initialState: CalculateDateState = {
  results: []
}

const extraReducers = (builder: ActionReducerMapBuilder<CalculateDateState>) => {
  builder
  .addCase(
    getResults,
    (state: CalculateDateState, action: PayloadAction<any> ) => {
      state.results.push(action.payload);
      console.log(action.payload, state.results);
    }
  )
}

const calculateDateSlice = createSlice({
  name: "calculateDate",
  initialState,
  reducers: {},
  extraReducers,
})

export const calculateDateReducer = calculateDateSlice.reducer;