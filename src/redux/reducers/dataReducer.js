import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  dataTemplate: [
    {
      title: 'Hello World',
      type: 'String',
    },
    {
      title: 'Last Name',
      type: 'String',
    },
  ],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const {increment} = dataSlice.actions;

export default dataSlice.reducer;
