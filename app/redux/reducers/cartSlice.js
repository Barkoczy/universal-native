import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.items = [...state.items, payload]
    },
    remove: (state) => {
      state.items = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer
