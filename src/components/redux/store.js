import { configureStore, createAction } from "@reduxjs/toolkit";
import addContactSliceReducer from "./contactSlase";
import changeFilterSliceReducer from "./filtersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const addContactPersistConfig = {
    key: 'user_contact',
    storage,
    whitelist: ['items']
}

const addContactReducer = persistReducer(
    addContactPersistConfig,
    addContactSliceReducer)

// const initialState = {
//     contacts: {
//         items: []
//     },
//     filters: {
//         name: ""
//     }
// };


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'addContact/contacts':
//             return {
//                 ...state,
//                 contacts: {
//                     item: state.contacts.items + action.payload,
//                 }
//             };

//         case 'deleteContact/contacts':
//             return {
//                 ...state,
//                 contacts: {
//                     items: state.contacts.items - action.payload,
//                 },
//             };

//         case 'filterContact/filters':
//             return {
//                 ...state,
//                 filters: {
//                     name: [...state.filters.name, action.payload]
//                 },
//             };

//         default:
//             break;
//     }
//     return state
// };

export const store = configureStore({
    reducer: {
        contacts: addContactReducer,
        filters: changeFilterSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)

