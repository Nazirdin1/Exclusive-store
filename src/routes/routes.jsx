import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SignUp from "../pages/signUp/SignUp";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import Cart from "../pages/cart/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/detail/Detail";
import Favorite from "../pages/favorite/Favorite";
import Payment from "../pages/payment/Payment";

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/signUp",
        name: "Sign Up",
        component: SignUp
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: Favorite
    },
    {
        path: "/payment",
        name: "Payment",
        component: Payment
    }
];

const AppRoutes = () => {
    return (
    
            <Routes>
                {menu.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

    );
};

export default AppRoutes;
