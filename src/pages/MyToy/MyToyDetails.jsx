/* eslint-disable react/prop-types */

const MyToyDetails = ({ toy, handleDelete }) => {

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