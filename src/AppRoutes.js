import { Navigate } from "react-router-dom";
import About from "./Pages/About.jsx";
import CartPage from "./Pages/CartPage.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import AccountPage from "./Pages/UserPage/AccountPage.jsx";
import EditProfile from "./Pages/UserPage/EditProfile.jsx";
import VerifyAccount from "./Pages/VerifyAccount.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import UserPageLayout from "./components/Layouts/UserPageLayout.jsx";
import PrivateRoutes from "./Utils/PrivateRoutes.jsx";

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
    element: (
      <PrivateRoutes>
        <CartPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/cart/checkout",
    element: (
      <PrivateRoutes>
        <CheckoutPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/user/edit",
    element: (
      <PrivateRoutes>
        <EditProfile />
      </PrivateRoutes>
    ),
  },
  {
    path: "/user/account",
    element: (
      <PrivateRoutes>
        <AccountPage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/user",
    element: (
      <PrivateRoutes>
        <UserPageLayout />
      </PrivateRoutes>
    ),
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
    element: (
      <PrivateRoutes>
        <WishlistPage />
      </PrivateRoutes>
    ),
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
