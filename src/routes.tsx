import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import Application from "./pages/layouts/application";
import Authentication from "./pages/layouts/authentication";
import SignIn from "./pages/signIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Application/>,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },

    {
        path: '/auth',
        element: <Authentication/>,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />,
            },
            // {
            //     path: 'sign-up',
            //     element: <SignUp/>,
            // },
        ]
    }
])