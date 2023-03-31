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
        filterArticles: (state, action) => {
            if (action.payload === 'News' || action.payload === 'Research') {
                return ({
                    ...state,
                    displayArticles: state.displayArticles.filter(
                        (article) => article.category === action.payload
                    )
                });
            } else {
                return ({
                    ...state,
                    displayArticles: state.displayArticles.filter(
                        (article) => article.publisher === action.payload
                    )
                });
            }
        },
        clearFilteredArticles: (state) => {
            return ({
                ...state,
                displayArticles: state.allArticles
            })
        }
    }
});

export const newsReducer = newsSlice.reducer;

export const {
    setAllArticles,
    clearAllArticles,
    filterArticles,
    clearFilteredArticles
} = newsSlice.actions;