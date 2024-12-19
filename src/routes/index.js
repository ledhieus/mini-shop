import LayoutDefault from "../LayoutDefault";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Success from "../pages/Cart/Success";
import Collection from "../pages/Collection";
import Collections from "../pages/Collections";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Search from "../pages/Search";
import TrackingOrder from "../pages/TrackingOrder";
import Wishlist from "../pages/Wishlist";

export const routes=[
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about-us",
                element: <About/>
            },
            {
                path: "/collections",
                element: <Collections/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/tracking-order",
                element: <TrackingOrder/>
            },
            {
                path: "/products/:slugProduct",
                element: <Product/>
            },
            {
                path: "/collections/:slug",
                element: <Collection/>
            },
            {
                path: "/wishlist",
                element: <Wishlist/>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/cart/success",
                element: <Success />
            },
            {
                path: "/search",
                element: <Search />
            }
        ]
    }
]