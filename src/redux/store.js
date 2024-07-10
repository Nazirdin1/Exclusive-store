import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slice/productsSlice';
import { cardReducer } from './slice/cardSlice';
import { likeReducer } from './slice/likeSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    card: cardReducer,
    like: likeReducer,
    // user: userReducer,
  },
});

export default store;
