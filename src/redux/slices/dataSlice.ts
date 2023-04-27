import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Item = {
    id: string;
    title: string;
    description: string;
    images: string[];
    price: number;
    category: string;
};

type DataState = {
    items: Item[];
    loading: boolean;
    error: string | null;
};

const initialState: DataState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchItems = createAsyncThunk<
    Item[],
    string,
    { rejectValue: string }
>("data/fetchItems", async function (pathname, { rejectWithValue }) {
    const response = await axios.get(pathname);
    rejectWithValue("lolkek");
    return response.data.products;
});

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Item[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            });
        // .addCase(fetchItems.rejected, (state, action) => {
        //     state.items = [];
        //     state.error = action.payload;
        // });
    },
});

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
