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
    addQA: (state, action: PayloadAction<IQAList>) => {
      const data = state.data;
      state.data = [...data, action.payload];
    },
    addReply: (
      state,
      action: PayloadAction<{ reply: IQAList; id: string }>
    ) => {},
  },
});

export const getQAList = (): AppThunk => async (dispatch) => {
  let data: IQAList[] = [];
  await agent.QA.list(10, 1).then((res) => (data = res));
  dispatch(qaSlice.actions.setData(data));
};

export const selectData = (state: { qa: { data: IQAList[] } }) => state.qa.data;
export const selectQAById =
  (id: string) => (state: { qa: { data: IQAList[] } }) =>
    state.qa.data.find((el) => el.id === id);
export const { setData } = qaSlice.actions;

export default qaSlice.reducer;
