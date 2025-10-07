import {configureStore} from '@reduxjs/toolkit'
import bookreducer from '../slices/bookslice'
const store=configureStore({
    reducer:{
        books:bookreducer,

    },

});
export default store;