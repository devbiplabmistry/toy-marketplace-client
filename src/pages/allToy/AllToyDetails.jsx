/* eslint-disable react/prop-types */

const AllToyDetails = ({toys}) => {
    return (
        <>
            <tbody >
                <tr>
                    <th>1</th>
                    <td>{toys.sellerName}</td>
                    <td>{toys?.name}</td>
                    <td>{toys?.subQuantity}</td>
                    <td>{toys?.price}</td>
                    <td>{toys?.AvailableQuantity}</td>
                    <button className="btn btn-secondary mt-1 mb-1">Details</button>
                </tr>
            </tbody>
        </>
    );
};

export default AllToyDetails;