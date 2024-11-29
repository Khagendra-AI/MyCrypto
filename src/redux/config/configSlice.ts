import {createSlice} from '@reduxjs/toolkit';
import {getProductsAction} from './configAction';
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
  gainersData: [],
  loosersData: [],
  walletBalance: 0,
  watchlistdata: [],
};
const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    addGainers: (state, action) => {
      console.log('>>>>>>>>>>>>>>>', state);
      // const data = action.payload;
      state.gainersData = action.payload;
      // state.gainersData.push(data);
    },
    addBalance: (state, action) => {
      const data = action.payload;
      state.walletBalance += Number(data);
      //console.log(state.walletBalance, 'walletbalance');
    },
    addWatchlist: (state, action) => {
      const data = action.payload;

      state.watchlistdata.push(data);
      console.log(state.watchlistdata,'data addded')
    },
    removeWatchlist: (state, action) => {
      const data = action.payload;

      state.watchlistdata.pop(data);
      console.log(state.watchlistdata,'deleted')
    },
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
  addGainers,
  addBalance,
  addWatchlist,
  removeWatchlist,
} = configSlice.actions;

export default configSlice.reducer;
