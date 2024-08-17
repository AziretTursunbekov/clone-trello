import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    trelo: [],
    isOpenCart: "",
  },
  reducers: {
    addList: (state, action) => {
      state.trelo.push(action.payload);
    },
    deleteList: (state, action) => {
      state.trelo = state.trelo.filter((item) => item.id !== action.payload);
    },
    addCart: (state, action) => {
      state.trelo.map((item) => {
        if (item.id === action.payload.id) {
          item.newTrello.push(action.payload);
        }
      });
    },
    openCart: (state, action) => {
      state.isOpenCart = action.payload;
    },
    closeCart: (state) => {
      state.isOpenCart = "";
    },
  },
});
export const { addList, addCart, deleteList, openCart, closeCart } =
  trelloSlice.actions;
export const trelloReducer = trelloSlice.reducer;
