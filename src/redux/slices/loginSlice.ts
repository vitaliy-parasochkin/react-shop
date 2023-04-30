import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

type LoginType = {
    isAuth: boolean;
    error: string | null;
};

const initialState: LoginType = {
    isAuth: localStorage.getItem("token") ? true : false,
    error: "",
};

export const postDataLogin = createAsyncThunk<
    LoginType,
    object,
    { rejectValue: string }
>("login/postDataLogin", async function (formData) {
    const response = await axios.post("/auth/login", formData);
    return response.data;
});

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        logOut(state) {
            state.isAuth = false;
            localStorage.removeItem("totalPrice");
            localStorage.removeItem("items");
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postDataLogin.pending, (state) => {
                state.isAuth = false;
                state.error = null;
            })
            .addCase(postDataLogin.fulfilled, (state) => {
                state.isAuth = true;
                state.error = null;
                localStorage.setItem("token", "true");
            })
            .addMatcher(isError, (state) => {
                state.error = "Incorrect data";
                state.isAuth = false;
            });
    },
});

export const { logOut } = dataSlice.actions;

export default dataSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith("rejected");
}
