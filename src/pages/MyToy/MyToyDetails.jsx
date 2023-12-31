/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyToyDetails = ({ toy, handleDelete }) => {
    const {loading} =useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <>
            <tbody >
                <tr>
                    <th><img className="w-20 h-20 rounded-lg" src={toy?.url} alt="" /></th>
                    <td>{toy?.photo}</td>
                    <td>{toy.sellerName}</td>
                    <td>{toy?.name}</td>
                    <td>{toy?.subQuantity}</td>
                    <td>{toy?.price}</td>
                    <td>{toy?.AvailableQuantity}</td>
                    <td>{toy?.discription}</td>
                    <Link to={`/addToy/${toy._id}`}><td className="btn btn-secondary mt-1 mb-1 mr-12 text-black">Update</td></Link>
                    <td onClick={() => handleDelete(toy._id)} className="btn btn-secondary mt-1 mb-1 text-black">X</td>
                </tr>
            </tbody>
        </>
    );
};

export default MyToyDetails;