import { createSlice } from '@reduxjs/toolkit';
import { FOODITEM } from '../../constants/FoodItems';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    isLoggedIn: false,
    cart: [],
    userData: {},
    items: [],
  },
  reducers: {
    setUser: (state, action) => {
      const userExists = state.users.some(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );

      if (userExists) {
        console.log('Existing user');
      } else {
        console.log('New user');
        state.users.push(action.payload);
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      console.log('loginemail', email);
      console.log('loginpassword', password);


      const user = state.users.find(user => {
        return user.email === email;
      });
      console.log('🚀 ~ file: authSlice.js:29 ~ user:', user);
      if (user && user.password === password) {
        state.isLoggedIn = true;
        // state.userData = {
        //   email: user.email,
        //   password: user.password,
        // };
        state.userData.email = user.email;
        state.userData.password = user.password;

        console.log('Login successful');
      } else {
        state.isLoggedIn = false;
        console.log('Login failed');
      }
    },
    logOut: state => {
      // state.userData('');
      state.isLoggedIn = false;
    },
    addToCart: (state, action) => {
      const { item } = action.payload;
      console.log("item:::::::", item);
      if (!state.items) {
        state.items = []; // Initialize items as an empty array if it's undefined
      }

      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      console.log('existingItem', existingItem)

      if (existingItem) {

        existingItem.quantity += 1;
        console.log("existing")
      } else {

        state.items.push({ id: item.id, quantity: 1, ...item });
        console.log("not existing")

      }
    },
    incrementItemQuantity: (state, action) => {
      const { itemId } = action.payload;
      console.log("itemid::::::::", itemId);
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
      console.log('incrementItemQuantity:::', itemToUpdate);

    },

    decrementItemQuantity: (state, action) => 
    {
      const { itemId } = action.payload;
      console.log('state:::', state);

      console.log('itemId:::', itemId);


      const itemToUpdate = state.items.find((item) => item.id === itemId);

      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;


      }
      console.log('decrementItemQuantity:::', itemToUpdate);

    },
    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      console.log('removeFromCartitemId:::', itemId);

      state.cart = state.items.filter((cartItem) => cartItem.id !== itemId);
    },


    clearCartAndUser: (state) => {
      state.users = null;
      state.cart = [];
      state.isLoggedIn = false;

    },

  },

});

export const { setUser, loginUser, logOut, addToCart, clearCartAndUser, incrementItemQuantity, decrementItemQuantity, removeFromCart } = authSlice.actions;
export default authSlice.reducer;
