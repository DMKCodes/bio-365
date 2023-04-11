import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { userReducer } from '../features/users/userSlice';
import { newsReducer } from '../features/news/newsSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userReducer,
        news: newsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

