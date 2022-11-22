import rootReducers from "./reducerCombine";
import thunk from "redux-thunk"
import {createStore, applyMiddleware} from "redux"
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, rootReducers)

// const store = createStore(persistedReducer,applyMiddleware(thunk))
// // export default () => {
// //     // let store = createStore(persistedReducer,applyMiddleware(thunk))
// //     return { store, persistor }
// // }
// let persistor = persistStore(store)
// export default store;
// export {persistor}

const store = createStore(rootReducers,applyMiddleware(thunk))
export default store;