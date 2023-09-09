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
import EditProfile from "./Pages/UserPage/EditProfile.jsx"

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
    path: "/user/edit",
    element: <EditProfile />
  },
  {
    path: "/my-account",
    element: <AccountPage />
  },
  {
    path: "/user",
    element: <UserPageLayout />
  },
  {
    path: "/user/edit",
    element: <EditProfile />
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
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} />,
  },
];

export default AppRoutes;
