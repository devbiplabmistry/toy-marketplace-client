import { Children, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const location =useLocation()
    const {user,loading} =useContext(AuthContext)
    if(loading) {
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;