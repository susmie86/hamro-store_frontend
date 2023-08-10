import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
import {
  bestSellingProducts,
  ourProducts,
  todaysSales,
} from "../Constants/ProductsData";

// Initial state of the App
const initialState = {
  cart: [],
  wishlist: [],
  user: null,
  todaysSales: [...todaysSales],
  bestSellingProducts: [...bestSellingProducts],
  ourProducts: [...ourProducts],
};

// Creating a Context
const AppContext = createContext();

// Creating a Custom hook that return app context
export function useAppContext() {
  return useContext(AppContext);
}

// App Context Provider Component
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
