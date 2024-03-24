import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
import Admin from "./Admin";
import UserControl from "./UserControl";

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
        {
            path: "/admin",
            element: <Admin />
        },
        {
            path: "/user",
            element: <UserControl />
        },
    ]
);

export default Rauter;