/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToyDetails = ({ toy, handleDelete }) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <>
            <tbody >
                <tr>
                    <th></th>
                    <td>{toy?.photo}</td>
                    <td>{toy.sellerName}</td>
                    <td>{toy?.name}</td>
                    <td>{toy?.subQuantity}</td>
                    <td>{toy?.price}</td>
                    <td>{toy?.AvailableQuantity}</td>
                    <td>{toy?.discription}</td>
                    <td className="btn btn-secondary mt-1 mb-1 mr-12 text-black">Update</td>
                    <td onClick={() => handleDelete(toy._id)} className="btn btn-secondary mt-1 mb-1 text-black">Deleted</td>
                </tr>
            </tbody>
        </>
    );
};

export default MyToyDetails;