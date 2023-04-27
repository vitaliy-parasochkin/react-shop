import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Item = {
    id: string;
    title: string;
    description: string;
    images: string[];
    price: number;
    count: number;
};

type CartState = {
    items: Item[];
    totalPrice: number;
};

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("items") || "[]"),
    totalPrice: JSON.parse(localStorage.getItem("totalPrice") || "0"),
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<Item>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
            localStorage.setItem("totalPrice", state.totalPrice.toString());
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        removeCartItem(state, action: PayloadAction<Item>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem && findItem.count > 1) {
                findItem.count--;
            } else {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
            localStorage.setItem("totalPrice", state.totalPrice.toString());
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        setCartItems(state, action: PayloadAction<Item[]>) {
            state.items = action.payload;
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
    },
});

export const { addCartItem, removeCartItem, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
