import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";

const Rauter = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/cart",
            element: <Cart />
        },
    ]
);

export default Rauter;