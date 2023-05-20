/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllToyDetails = ({toys}) => {
    return (
        <>
            <tbody >
                <tr>
                    <th></th>
                    <td>{toys.sellerName}</td>
                    <td>{toys?.name}</td>
                    <td>{toys?.subQuantity}</td>
                    <td>{toys?.price}</td>
                    <td>{toys?.AvailableQuantity}</td>
                    <Link to={`/details/${toys._id}`}><button className="btn btn-secondary mt-1 mb-1">Details</button></Link>
                </tr>
            </tbody>
        </>
    );
};

export default AllToyDetails;