import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/dashboard"
import Register from "./pages/register"
import Login from "./pages/login"



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    }

])