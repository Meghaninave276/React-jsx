import {configureStore} from '@reduxjs/toolkit'
import pslicereducer from '../slices/pslice';
const store=configureStore({
    reducer:{
        product:pslicereducer,
    }
})
export default store;