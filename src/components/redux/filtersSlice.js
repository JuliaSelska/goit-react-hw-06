import { createAction, createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'changeFilter',
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, action) => {
            return { ...state, name: action.payload, }

        },

    },
});

export default slice.reducer;

export const { changeFilter, a } = slice.actions;
// export const changeFilter = createAction('filterContact/filters');

// const initialState = {
//     name: "",
// };

// export default function changeFilterSliceReducer(state = initialState, action) {

//     switch (action.type) {
//         case 'filterContact/filters':
//             return {
//                 ...state, name: action.payload,
//             };

//         default:
//             return state;
//     }
// }