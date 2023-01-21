import { configureStore } from "@reduxjs/toolkit"
import {counterSlice, toggleGameState}  from "./counter" 

export const store = configureStore(counterSlice, toggleGameState);  

   
// export default configureStore({
//     reducer: {counterSlice} 
// })