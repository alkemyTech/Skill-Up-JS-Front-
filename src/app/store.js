import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../features/auth/authSlice';
import { transactionsSlice } from '../features/transactions/transactionsSlice';
import { usersSlice } from '../features/users/usersSlice';

export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        transactions: transactionsSlice.reducer,
        users: usersSlice.reducer,
    },
});
