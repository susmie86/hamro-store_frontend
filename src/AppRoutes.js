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
import UserPageLayout from "./Pages/UserPage/UserPageLayout.jsx";
import EditProfile from "./Pages/UserPage/EditProfile.jsx";
import VerifyAccount from "./Pages/VerifyAccount.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/cart/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/user/edit",
    element: <EditProfile />,
  },
  {
    path: "/my-account",
    element: <AccountPage />,
  },
  {
    path: "/user",
    element: <UserPageLayout />,
  },
  {
    path: "/user/edit",
    element: <EditProfile />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signup/verify",
    element: <VerifyAccount />,
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
    path: "/products/:section",
    element: <ProductsPage />,
  },
  {
    path: "/products/:category",
    element: <ProductsPage />,
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
