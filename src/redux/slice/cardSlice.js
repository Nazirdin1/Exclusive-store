
// import { createSlice } from "@reduxjs/toolkit";


// const cardSlice = createSlice({
//     name: "card",
//     initialState: {
//         items: [],
//     },
//     reducers: {
//         addItem(state, { payload }) {
//             let hasInCart = state.items.find(el => el?.id === payload.id)
//             if (hasInCart) {
//                 hasInCart.quantity += 1;
//                 return;
//             }
//             const product = {
//                 ...payload,
//                 quantity: 1
//             }
//             state.items = [...state.items, product];
//         },
//         removeItem(state, { payload }) {
//             state.items = state.items.filter(item => item.id !== payload.id);
//         }
//     }
// })

// export const { addItem, removeItem } = cardSlice.actions
// export const cardReducer = cardSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, { payload }) {
            let hasInCart = state.items.find(el => el?.id === payload.id)
            if (hasInCart) {
                hasInCart.quantity += 1;
                saveToLocal(state.items)
                return;
            }
            const product = {
                ...payload,
                quantity: 1
            }
            state.items = [...state.items, product];
            saveToLocal(state.items)
        },
        removeItem(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload.id);
            saveToLocal(state.items)    
        },
        updateQuantity(state, { payload }) {
            const item = state.items.find(item => item.id === payload.id);
            if (item) {
                item.quantity = payload.quantity;
            }
        },
        updateCart: (state) => {
            // ?? null end undefined
            const items = localStorage.getItem('cart25')
            if(items){
                state.items = JSON.parse(items)
            }
        }
    }
})

export const { addItem, removeItem, updateQuantity, updateCart } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;

function saveToLocal (arr) {
    localStorage.setItem('cart25', JSON.stringify(arr))
}