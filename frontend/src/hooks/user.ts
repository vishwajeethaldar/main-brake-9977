import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// export const loadDataLocalStorage = ( key : string ) => {

//     let data = JSON.parse(localStorage.getItem(key) || '""' || '{}' || '[]')    
//     return data

// }


// export const saveDataLocalStorage = ( key : string, value : string | boolean | number | [] | {} ) : void => {
//     localStorage.setItem(key, JSON.stringify(value ))
// }

// export const removeDataLocalStorage = ( key : string ) : void => {
//     localStorage.removeItem(key)
// }