import { configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/userslice"
import chatreducer from "../slices/chatslice";
export  const store=configureStore({
    reducer:{
        user:userReducer,
        chats:chatreducer,
    }
})