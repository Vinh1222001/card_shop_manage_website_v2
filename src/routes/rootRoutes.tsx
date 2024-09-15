import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import App from "../App";
import DashBoard from "../pages/DashBoard";
import Products from "../pages/Products";

const rootRoute = createBrowserRouter([

    {
        element: <App/>,
        children: [

            {
                path: "/",
                element: <RootLayout/>,
                children:[
                    {
                        index: true,
                        element: <Navigate to="/dash-board" replace />,
                    },
                    {
                        path: "dash-board",
                        element: <DashBoard/>
                    },
                    {
                        path: "products",
                        element: <Products/>
                    }
                ]
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