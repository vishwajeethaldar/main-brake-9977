import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import projectsSlice from './projects/projectsSlice'
const store = configureStore({
    reducer:{
        usersSlice,projectsSlice
    },
  });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 