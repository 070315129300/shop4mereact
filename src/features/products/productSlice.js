import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk("products/get", async (thunkAPI) => {
  try {
    return await productService.getProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});


export const addToWishlist = createAsyncThunk("products/wishlist", async (prodId, thunkAPI) => {
  try {
    return await productService.addToWishlist(prodId);
  } catch (error) { 
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const productState = {
  product: "",
  isError: false, 
  isSuccess: false, 
  isLoading: false,
  message: ""
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.error || "Unknown error occurred";
      }).addCase(addToWishlist.pending, (state) =>{
        state.isLoading = true;
      }).addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message="product added tp wishlist";
      }) .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default productSlice.reducer;
 