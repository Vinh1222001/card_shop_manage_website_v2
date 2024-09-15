import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import App from "../App";
import DashBoard from "../pages/DashBoard";
import Products from "../pages/Products";
import { crumbCreator } from "../utils/crumCreator";
import { useQuery } from "@tanstack/react-query";
import { getProductAtId } from "../services/axios/products";

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
                        children:[
                            {
                                path:":productId",
                                element: <Products/>,
                                handle: crumbCreator(),
                                loader: async ({params}) => {
                                    // const {data} = useQuery({queryKey:['products']})
                                    return getProductAtId(params.productId as string).then((obj) =>{
                                        return {
                                            // name: (data as any).find((product:any) => product.id === params.productId)
                                            name: (obj as any)[0]?.name
                                        }
                                        
                                    })                                   
                                    
                                },
                            }
                        ]
                    },
                    {
                        path: "orders",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Orders"
                            }
                        },
                    },
                    {
                        path: "store-info",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Store Information"
                            }
                        },
                    },
                    {
                        path: "media",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Media"
                            }
                        },
                    },
                    {
                        path: "accounts",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Accounts"
                            }
                        },
                    },
                    {
                        path: "system-setting",
                        element: <Products/>,
                        handle: crumbCreator(),
                        loader: () => {
                            return {
                                name: "Setting"
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