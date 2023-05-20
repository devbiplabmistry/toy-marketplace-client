import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Register from "../pages/login/Register/Register";
import Login from "../pages/login/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/home/ShopBy category/ToyDetails";
import AddToy from "../pages/addAToy/AddToy";
import MyToy from "../pages/allToy/AllToy";
import AllToy from "../pages/allToy/AllToy";
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
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: "/addToy",
                element: <AddToy></AddToy>,
            },
            {
                path: "/allToy",
                element:<AllToy></AllToy>,
                loader: () => fetch('http://localhost:5000/addToy')
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);
export default Router;