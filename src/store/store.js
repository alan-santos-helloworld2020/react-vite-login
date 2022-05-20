import { createSlice,configureStore} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        user:{
            email:"",
            password:""
        }        
    },
    reducers:{
        setUser(state,action){
            state.user=action.payload
        }
    }
})

//aqui exporto as actions
export const {setUser} = userSlice.actions

//aqui exporto a store
export default configureStore({
    reducer:{
        logado:userSlice.reducer
    }
})