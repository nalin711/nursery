import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
            }
        }
    }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
