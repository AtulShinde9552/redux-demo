const { createSlice } = require('@reduxjs/toolkit')



const cartSlice = createSlice({

    name: 'cart',

    initialState:[],

    reducers: {

        add : (state, action)=>{
             state.push(action.payload)
        },

        remove:(state, action)=>{
            let newState = state.filter(item=> item.id !== action.payload)
           return state = newState

        },
    },
})


export const { add, remove } = cartSlice.actions
export default cartSlice.reducer


// export const {adduser} = user.actions
// export default user.reducer