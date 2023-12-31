import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Register from "../pages/login/Register/Register";
import Login from "../pages/login/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/home/ShopBy category/ToyDetails";
import AddToy from "../pages/addAToy/AddToy";
import AllToy from "../pages/allToy/AllToy";
import MyToy from "../pages/MyToy/MyToy";
import Blog from "../pages/Blog/Blog";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";
import Update from "../pages/Update/Update";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "/toy/:id",
                element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://toy-server-liart.vercel.app/toy/${params.id}`)
            },
            {
                path: "/addToy",
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: "/allToy",
                element: <AllToy></AllToy>,
                loader: () => fetch('https://toy-server-liart.vercel.app/allToy')
            },
            {
                path: "/myToy",
                element: <PrivetRoute><MyToy></MyToy></PrivetRoute>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            },
            {
                path: "/details/:id",
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) =>fetch(`https://toy-server-liart.vercel.app/alltoy/${params.id}`)
            },
            {
                path: "/addToy/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://toy-server-liart.vercel.app/addToy/${params.id}`)
            },

            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);
export default Router;