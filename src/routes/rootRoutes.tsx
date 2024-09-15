import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import App from "../App";
import DashBoard from "../pages/DashBoard";
import Products from "../pages/Products";
import { crumbCreator } from "../utils/crumCreator";

const rootRoute = createBrowserRouter([

    {
        element: <App/>,
        children: [

            {
                path: "/",
                element: <RootLayout/>,
                handle: crumbCreator(),
                loader: () => {
                    return {
                        name: "Home"
                    }
                },
                children:[
                    {
                        index: true,
                        element: <Navigate to="/dash-board" replace />,
                        
                    },
                    {
                        path: "dash-board",
                        element: <DashBoard/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Dash board"
                            }
                        },
                    },
                    {
                        path: "products",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Products"
                            }
                        },
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