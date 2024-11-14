import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "./configAction";
interface ConfigModal {
    isLoading: boolean;
    count: number;
    products?: any;
    matched: boolean;
  }
  type ActionType = {
    type: string;
    payload: any;
  };
let initialState = {
    isLoading: false,
    count: 0,
    products: [],
  };
const configSlice=createSlice({
    name: 'Config',
    initialState,
    reducers: {

    },
  extraReducers: builder => {
    builder.addCase(getProductsAction.pending, state => {
      state.isLoading = true;
    //   console.log('in pending')
    });
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
    //  console.log('action', action);
      state.isLoading = false;
      state.products = action.payload;
    //   console.log('data found')

    });
    builder.addCase(getProductsAction.rejected, state => {
      state.isLoading = false;
    });

    // builder.addMatcher(
    //   //return condition from this callback function
    //   action => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.isLoading = false;
    //     state.matched = true;
    //   },
    // );
    // builder.addDefaultCase((state, action) => {
    //  // console.log('default case', action);
    //   state.isLoading = false;
    // });
  },
});
// export const {getProducts} = configSlice.selectors;

export const {
  // increaseCount,
  // decreaseCount,
  // SET_CONFIG_DATA,
  // increaseCountByPayload,

} = configSlice.actions;

export default configSlice.reducer;