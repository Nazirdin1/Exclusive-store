
import { createSlice } from "@reduxjs/toolkit"

const likeSlice = createSlice({
    name: "like",
    initialState: {
        items: []
    },
    reducers: {
        addTolike: (state, {payload}) => {
            const hasInItem = state.items.find(el => el.id === payload.id)
            if(hasInItem){
                hasInItem.quantity += 1
                return
            }
            const item = {
                ...payload,
                isLike: true,
                quantity: 1
            }
            state.items.push(item)
        },
        removeFromLike: (state, {payload}) => {
            const item = state.items.find(el => el.id === payload.id)
            item.isLike = false
            state.items = state.items.filter(item => item.id !== payload.id)
        }
    }
})

export const { addTolike, removeFromLike } = likeSlice.actions
export const likeReducer = likeSlice.reducer