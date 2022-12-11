import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rolesService from "./rolesService";

const initialState = {
  role: [],
};

// Get all Roles
export const getAllRole = createAsyncThunk(
  "roles/getAll",
  async (_, thunkAPI) => {
    try {
      return await rolesService.getAllRole();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const rolesSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRole.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.roles = action.payload;
    });
  },
});

export const { reset } = rolesSlice.actions;
export default rolesSlice.reducer;
