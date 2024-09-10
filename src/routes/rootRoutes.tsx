import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import App from "../App";

const flag = true as boolean

const rootRoute = createBrowserRouter([

    {
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to={flag? "sign-in" : "/"} replace/> 
            },
            {
                path: "/",
                element: <RootLayout/>
            },
            {
                path: "sign-in",
                // index: true,
                element: <SignIn/>
        
            }
        ]
    }
])

export default rootRoute