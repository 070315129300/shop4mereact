import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { categoriesService } from "./categoriesService";

export const categoriesQuery = createAsyncThunk("get/categories", async (thunkAPI) => {
  try {
    return await categoriesService.getCategories();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

console.log(categoriesQuery)




const categoriesState = {
  categories: "",
  isError: false,
  isSuccess: false, 
  isLoading: false,
  message: ""
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoriesQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(categoriesQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categories = action.payload;
     
      })
      .addCase(categoriesQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default categoriesSlice.reducer;
 