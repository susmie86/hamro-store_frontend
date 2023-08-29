function Reducer(state, action) {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, user: action.payload };
    }
    case "REMOVE_USER": {
      return { ...state, user: {} };
    }
    case "ADD_TO_CART": {
      const product = action.payload;
      // Check if the product already exist in Cart
      const existingCartProduct = state.cart.find(item => item.id === product.id);

      if (existingCartProduct) {
        // If Product already exist in product then increase the product quantity
        const updatedCart = state.cart.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it to cart
        return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] }
      }

      // return { ...state, cart: [...state.cart, action.payload] }
    }
    case "ADD_ALL_TO_CART": {
      // Find the wishlist items using the ids from the payload
      const itemsToAdd = state.wishlist.filter(
        (item) => action.payload.includes(item.id)
      );
      // Add the found wishlist items to the cart
      return { ...state, cart: [...state.cart, ...itemsToAdd] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "ADD_TO_WISHLIST": {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    }
    case "REMOVE_ALL_FROM_WISHLIST": {
      return { ...state, wishlist: [] };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    // case "REMOVE_USER": {
    //   return { ...state, user: null };
    // }
    case "SET_TODAYS_SALES": {
      return { ...state, todaysSales: [...state.todaysSales, action.payload] };
    }
    case "SET_BEST_SELLING_PRODUCTS": {
      return {
        ...state,
        bestSellingProducts: [...state.bestSellingProducts, action.payload],
      };
    }
    case "INCREASE_QUANTITY": {
      console.log("this is running and id is : " + action.payload)
      const updatedCart = state.cart.map((item) => {
        return item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item;
      });

      return { ...state, cart: updatedCart }
    }
    case "DECREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) => {
        return item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item;
      });

      return { ...state, cart: updatedCart }
    }
    default:
      return state;
  }
}

export default Reducer;
