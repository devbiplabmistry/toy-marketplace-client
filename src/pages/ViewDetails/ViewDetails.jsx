
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData()
    const { name,sellerName, sellerEmail, AvailableQuantity, price, subQuantity, rattings } = details
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-16">
            <figure><img src={details?.url} alt="image url" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{sellerName}</p>
                <p>{sellerEmail}</p>
                <p>{AvailableQuantity}</p>
                <p>{price}</p>
                <p>{subQuantity}</p>
                <p>{rattings}</p>
            </div>
        </div>
    );
};

export default ViewDetails;