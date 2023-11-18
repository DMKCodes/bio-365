import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allArticles: null,
    displayArticles: null,
    filterError: null
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
                displayArticles: state.allArticles,
                filterError: null
            });
        },
        filterDisplayArticles: (state, action) => {
            const { filterType, filterValue } = action.payload;

            if (filterValue === 'Category' || filterValue === 'Publisher') {
                return ({ 
                    ...state,
                    displayArticles: state.allArticles,
                    filterError: null
                });
            } else {
                const filteredArticles = state.allArticles.filter((article) => {
                    return article[filterType] === filterValue;
                });

                if (filteredArticles.length === 0) {
                    return ({ 
                        ...state,
                        displayArticles: [],
                        filterError: `No articles found for ${filterValue}.`
                    });
                } else {
                    return ({ 
                        ...state,
                        displayArticles: filteredArticles,
                        filterError: null
                    });
                };
            }
        },
        searchDisplayArticles: (state, action) => {
            const searchQuery = action.payload.toLowerCase();

            if (!searchQuery) {
                state.displayArticles = state.allArticles;
            }

            const filteredArticles = state.allArticles.filter((article) => {
                return (
                    article.title.toLowerCase().includes(searchQuery) ||
                    article.publisher.toLowerCase().includes(searchQuery) ||
                    article.category.toLowerCase().includes(searchQuery) ||
                    article.snippet.toLowerCase().includes(searchQuery)
                );
            });

            if (filteredArticles.length === 0) {
                state.displayArticles = [];
                state.filterError = `No results found for ${action.payload}.`
            } else {
                state.displayArticles = filteredArticles;
                state.filterError = null;
            };
        },
    },
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

export const selectFilterError = (state) => {
    return state.news.filterError;
};