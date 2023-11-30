import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface FilterState {
  data: any[];
  loading: boolean;
  error: string | null;
}

interface FetchFilteredDataParams {
  metadataIds: string[];
}

const initialState: FilterState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFilteredData = createAsyncThunk(
  "filter/fetchFilteredData",
  async ({ metadataIds }: FetchFilteredDataParams) => {
    const params = new URLSearchParams();
    metadataIds.forEach((id) => params.append("metadata-ids", id));
    const response = await fetch(
      `http://localhost:9080/api/filter/0/40?${params}`
    );
    const data = await response.json();
    return data;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [],
    loading: false,
    error: null,
  } as FilterState,
  reducers: {
    resetFilter: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilteredData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
