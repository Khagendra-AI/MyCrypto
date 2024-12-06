import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const getProductsApi = async () => {
  
  // console.log('in getproducts appii')
  return axios.get('https://api.coincap.io/v2/assets');
};
export const getProductsAction = createAsyncThunk(
  'config/getProducts',
  async (args, thunkApi) => {
    // console.log('args', args);
    try {
      // console.log('in getproducts try')
      // console.log('getProductsAction', args, thunkApi);
      const response = await getProductsApi();
      //  console.log('getProductsApi', response);
      if (response) {
        // console.log('in if','///////////////')
        return thunkApi.fulfillWithValue(response.data);
      }
      throw new Error(response?.data?.error as string);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
