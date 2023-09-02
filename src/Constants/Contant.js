import CustomerServiceIcon from "../assets/Icons/CustomerServiceIcon";
import DeliveryIcon from "../assets/Icons/DeliveryIcon";
import MoneybagIcon from "../assets/Icons/MoneybagIcon";
import SaleIcon from "../assets/Icons/SaleIcon";
import ShopIcon from "../assets/Icons/ShopIcon";
import ShoppingBagIcon from "../assets/Icons/ShoppingBagIcon";
import { emma_watson, tom_cruise, will_smith } from "../assets/imageIndex";
import SecureIcon from "../assets/Icons/SecureIcon";

const footerAccountLinks = [
  {
    id: 1,
    title: "my account",
    path: "/myaccount",
  },
  {
    id: 2,
    title: "login / register",
    path: "/signup",
  },
  {
    id: 3,
    title: "cart",
    path: "/home/cart",
  },
  {
    id: 4,
    title: "wishlist",
    path: "/home/wishlist",
  },
  {
    id: 5,
    title: "shop",
    path: "/home",
  },
];

const navLinks = [
  {
    id: 1,
    title: "home",
    routeTo: "/",
  },
  {
    id: 2,
    title: "contact",
    routeTo: "/contact",
  },
  {
    id: 3,
    title: "about",
    routeTo: "/about",
  },
  {
    id: 4,
    title: "sign up",
    routeTo: "/signup",
  },
];

const plusPoint = [
  {
    id: "Shop",
    icon: <ShopIcon />,
    value: 10.5,
    msg: "seller active our site",
  },
  {
    id: "Sale",
    icon: <SaleIcon />,
    value: 33,
    msg: "monthly product sale",
  },
  {
    id: "Shopping-Bag",
    icon: <ShoppingBagIcon />,
    value: 45.5,
    msg: "customer active in our site",
  },
  {
    id: "Money-Bag",
    icon: <MoneybagIcon />,
    value: 25,
    msg: "annual gross sale in our site",
  },
];

const services = [
  {
    id: "fast delivery",
    icon: <DeliveryIcon />,
    title: "free and fast delivery",
    message: "Free delivery for all orders over $140",
  },
  {
    id: "24/7 customer service",
    icon: <CustomerServiceIcon />,
    title: "24/7 customer service",
    message: "friendly 24/7 customer support",
  },
  {
    id: "money back guaranty",
    icon: <SecureIcon />,
    title: "money back guarantee",
    message: "we return money within 30 days",
  },
];

const teams = [
  {
    id: 1,
    name: "tom cruise",
    image: <img src={tom_cruise} alt="tom cruise" />,
    post: "founder & chairperson",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://www.linkedin.com/",
    },
  },
  {
    id: 2,
    image: <img src={emma_watson} alt="emma watson" />,
    name: "emma watson",
    post: "managing director",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://www.linkedin.com/",
    },
  },
  {
    id: 3,
    image: <img src={will_smith} alt="Will smith" />,
    name: "will smith",
    post: "product designer",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://www.linkedin.com/",
    },
  },
];

const quickLinks = [
  {
    id: 1,
    title: "privacy policy",
    path: "/privacyPolicy",
  },
  {
    id: 2,
    title: "terms of use",
    path: "/terms",
  },
  {
    id: 3,
    title: "FAQ",
    path: "/faq",
  },
  {
    id: 4,
    title: "contact",
    path: "/contact",
  },
];

const userNavigation = [
  {
    id: 1,
    title: "my account",
    path: "/user/account"
  },
  {
    id: 2,
    title: "my order",
    path: "/user/order"
  },
  {
    id: 3,
    title: "my wishlist",
    path: "/wishlist"
  },
  {
    id: 4,
    title: "account book",
    path: "/user/address"
  },
  {
    id: 5,
    title: "account information",
    path: "/user/edit"
  }
]

export {
  footerAccountLinks,
  navLinks,
  teams,
  plusPoint,
  services,
  quickLinks,
  userNavigation
};
