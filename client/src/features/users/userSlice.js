import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    token: null,
    isLoading: true,
    errMsg: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return ({
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token
            });
        },
        clearCurrentUser: (state) => {
            return ({
                ...state,
                currentUser: null,
                token: null
            });
        },
        updateToken: (state, action) => {
            return ({
                ...state,
                token: action.payload
            });
        },
        addSavedArticle: (state, action) => {
            return ({
                ...state,
                currentUser: {
                    ...state.currentUser,
                    savedArticles: [...state.currentUser.savedArticles, action.payload]
                }
            });
        },
        removeSavedArticle: (state, action) => {
            return ({
                ...state,
                currentUser: {
                    ...state.currentUser,
                    savedArticles: state.currentUser.savedArticles.filter(
                        article => article.title !== action.payload.title
                    )
                }
            });
        },
        setLoading: (state, action) => {
            return ({
                ...state,
                isLoading: action.payload
            });
        },
        setError: (state, action) => {
            return ({
                ...state,
                errMsg: action.payload
            });
        }
    },
});

export const userReducer = userSlice.reducer;

export const { 
    setCurrentUser, 
    clearCurrentUser, 
    updateToken,
    addSavedArticle,
    removeSavedArticle,
    setLoading,
    setError
} = userSlice.actions;

export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};

export const checkAdmin = (state) => {
    return state.user.currentUser.admin;
};

export const selectToken = (state) => {
    return state.user.token;
};

export const checkSavedArticles = (state, title) => {
    if (state.user.currentUser) {
        const savedArticles = state.user.currentUser.savedArticles;
        if (!savedArticles) {
            return false;
        }
        return savedArticles.some((article) => article.title === title);
    }
};

export const selectLoading = (state) => {
    return state.user.isLoading;
};

export const selectError = (state) => {
    return state.user.errMsg;
}