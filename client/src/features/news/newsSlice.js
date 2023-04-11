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
        },
        setDisplayArticles: (state, action) => {
            return ({
                ...state,
                displayArticles: action.payload
            })
        },
        clearDisplayArticles: (state) => {
            return ({
                ...state,
                displayArticles: state.allArticles
            })
        },
        filterDisplayArticles: (state, action) => {
            const { filterType, filterValue } = action.payload;

            if (!filterValue) {
                state.displayArticles = state.allArticles;
            } else {
                state.displayArticles = state.allArticles.filter(article => {
                    return article[filterType] === filterValue;
                });
            }
        }
    }
});

export const newsReducer = newsSlice.reducer;

export const {
    setAllArticles,
    clearAllArticles,
    setDisplayArticles,
    clearDisplayArticles,
    filterDisplayArticles
} = newsSlice.actions;

export const selectDisplayArticles = (state) => {
    return state.news.displayArticles;
};