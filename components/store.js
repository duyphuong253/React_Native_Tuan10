import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bikes: [
    { id: 1, name: 'Pinarello', price: 1800, types: 'Roadbike', image: require('../assets/hinh1.png'), description: 'Description of Pinarello', sale: 1530 },
    { id: 2, name: 'Pina Mountain', price: 1700, types: 'Mountain', image: require('../assets/hinh2.png'), description: 'Description of Pina Mountain', sale: 1445 },
    { id: 3, name: 'Pina Bike', price: 1500, types: 'Roadbike', image: require('../assets/hinh3.png'), description: 'Description of Pina Bike', sale: 1275 },
    { id: 4, name: 'Pinarello', price: 1900, types: 'Roadbike', image: require('../assets/hinh4.png'), description: 'Description of Pinarello', sale: 1615 },
    { id: 5, name: 'Pina Bike', price: 2700, types: 'Roadbike', image: require('../assets/hinh3.png'), description: 'Description of Pina Bike', sale: 2295 },
    { id: 6, name: 'Pina Mountain', price: 1350, types: 'Mountain', image: require('../assets/hinh2.png'), description: 'Description of Pina Mountain', sale: 1110 },
  ],
  favorites: [],
  cart: [],
  filter: 'All',
};

const bikeSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    addBike: (state, action) => {
      state.bikes.push(action.payload);
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addBike, addToFavorites, addToCart, setFilter } = bikeSlice.actions;

export const store = configureStore({
  reducer: {
    bikes: bikeSlice.reducer,
  },
});
