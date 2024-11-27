import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import ApplicationLayout from "./pages/layouts/ApplicationLayout";
import AuthenticationLayout from "./pages/layouts/authenticationLayout";
import SignIn from "./pages/signIn";

export const router = createBrowserRouter([
    {
        path: '/'
        element: <ApplicationLayout/>,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },

    {
        path: '/',
        element: <AuthenticationLayout />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    }
])