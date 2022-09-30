/*
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import userReducer from './users/users.reducer'

const rootReducer = combineReducers({
    user:userReducer
})

 const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
 export default store
 export type RootReducer = ReturnType<typeof rootReducer>;
*/

import { configureStore } from '@reduxjs/toolkit'

//import { intStateType, projectReducer } from './projects/project.reducer'
//import userReducer from './users/users.reducer'
//import {combineReducers, legacy_createStore, applyMiddleware} from "redux"
//import thunk from 'redux-thunk'
//export const rootReducers = combineReducers({
 // users: userReducer,
  //projects:projectReducer

import { tasksReducer } from './tasks/tasks_reducer'
import userReducer from './users/users.reducer'

 const store = configureStore({
  reducer: {
    users: userReducer,
    tasks: tasksReducer,
  }

})

//const store = legacy_createStore(rootReducers,{}, applyMiddleware(thunk))
//  const store = configureStore({
//   reducer: {
//     users: userReducer,
//     projects:projectReducer
//   }
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof rootReducers>
export default store
