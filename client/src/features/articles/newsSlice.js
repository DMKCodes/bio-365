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
            });
        },
        resetDisplayArticles: (state) => {
            return ({
                ...state,
                displayArticles: state.allArticles
            });
        },
        filterDisplayArticles: (state, action) => {
            const { filterType, filterValue } = action.payload;

            if (!filterValue) {
                state.displayArticles = state.allArticles;
            } else {
                state.displayArticles = state.allArticles.filter((article) => {
                    return article[filterType] === filterValue;
                });
            }
        },
        searchDisplayArticles: (state, action) => {
            const searchQuery = action.payload.toLowerCase();

            if (!searchQuery) {
                state.displayArticles = state.allArticles;
            } else {
                state.displayArticles = state.allArticles.filter((article) => {
                    return (
                        article.title.toLowerCase().includes(searchQuery) ||
                        article.publisher.toLowerCase().includes(searchQuery) ||
                        article.category.toLowerCase().includes(searchQuery) ||
                        article.snippet.toLowerCase().includes(searchQuery)
                    );
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
    resetDisplayArticles,
    filterDisplayArticles,
    searchDisplayArticles
} = newsSlice.actions;

export const selectDisplayArticles = (state) => {
    return state.news.displayArticles;
};