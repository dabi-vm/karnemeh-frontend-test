import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQAList } from "../models/QAModels";
import agent from "../services/agent";
import { AppThunk } from "./store";

const initialState: IQAList[] = [];

export const qaSlice = createSlice({
  name: "qa",
  initialState: {
    data: initialState,
  },
  reducers: {
    setData: (state, action: PayloadAction<IQAList[]>) => {
      state.data = action.payload;
    },
  },
});

// get Q&A list with redux thunk
export const getQAList = (): AppThunk => async (dispatch) => {
  let data: IQAList[] = [];
  await agent.QA.list(10, 1).then((res) => (data = res));
  // dispatch fetched data to redux store
  dispatch(qaSlice.actions.setData(data));
};

// select all qaSlice data
export const selectData = (state: { qa: { data: IQAList[] } }) => state.qa.data;
// select a Q&A by Id
export const selectQAById =
  (id: string) => (state: { qa: { data: IQAList[] } }) =>
    state.qa.data.find((el) => el.id === id);
export const { setData } = qaSlice.actions;

export default qaSlice.reducer;
