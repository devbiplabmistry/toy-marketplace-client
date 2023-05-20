import { useLoaderData } from "react-router-dom";



const ToyDetails = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-center mx-auto mt-10 mb-10">
                <figure><img src={data?.picture}
                    alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{data?.name}</h2>
                    <p>Price $:{data?.price}</p>
                    <p>Rattings :{data?.ratting}</p>
                    <p>Seller Name :{data?.sellerName}</p>
                    <p>Seller Email :{data?.sellerEmail}</p>
                    <p>Quantity:{data?.AvailableQuantity}</p>
                    <p>Discriptions:{data?.Discription}</p>
                    <p>Category :{data?.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;