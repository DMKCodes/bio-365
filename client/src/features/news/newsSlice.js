import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allArticles: null,
    displayArticles: null
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setAllArticles: (state, action) => {
            return ({
                ...state,
                allArticles: action.payload,
                displayArticles: action.payload
            });
        },
        clearAllArticles: (state) => {
            return ({
                ...state,
                allArticles: null,
                displayArticles: null
            });
        }
    }
});

export const newsReducer = newsSlice.reducer;

export const {
    setAllArticles,
    clearAllArticles
} = newsSlice.actions;