import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //  paload = id
            state.cart = state.cart.filter(el=> el.pizzaId!==action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item=>item.pizzaId === action.payload)
            item.quantity++
            item.totalPrice = item.quantity*item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item=>item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.quantity*item.unitPrice;
            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state) {
            state.cart = []
        }
    }
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;
export const getTotalCartQuantity = state=>state.cart.cart.reduce((acc, el)=>acc+el.quantity,0)
export const getTotalCartPrice = state=>state.cart.cart.reduce((acc, el)=>acc+el.totalPrice,0)
export const getCurrentQuantityById = id=> state => state.cart.cart.find(item=>item.pizzaId===id)?.quantity ?? 0;
export const getCart = state=> state.cart.cart;

export default cartSlice.reducer