import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
        filteredItems: [],   
        isLoading: false,
        error: null,
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer