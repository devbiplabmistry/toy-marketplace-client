import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Register from "../pages/login/Register/Register";
import Login from "../pages/login/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/home/ShopBy category/ToyDetails";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"ToyDetails",
                element:<ToyDetails></ToyDetails>
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
]);
export default Router;