import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name: 'addContact',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.value += action.payload;
        },
        deleteContact: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export default slice.reducer;

export const { addContact, deleteContact, a } = slice.actions;

// export const addContact = createaction('addContact/contacts');

// export const deleteContact = createaction('deleteContact/contacts');

// const initialState = {
//     items: [],
// };

// export default function addContactSliceReducer(state = initialState, action) {

//     switch (action.type) {
//         case 'addContact/contacts':
//             return {
//                 ...state, value: state.value + action.payload,
//             };

//         case 'deleteContact/contacts':
//             return {
//                 ...state, value: state.value - action.payload,
//             };

//         default:
//             return state;
//     }
// }