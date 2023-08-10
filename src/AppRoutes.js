import About from "./Pages/About.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import { Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import AccountPage from "./Pages/AccountPage.jsx";

const AppRoutes = [
  {
    path: "/my-account",
    element: <AccountPage />
  },
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} />,
  },
];

export default AppRoutes;
