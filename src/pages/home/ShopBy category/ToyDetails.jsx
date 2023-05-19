import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const ToyDetails = () => {
    const { singleToy } = useContext(AuthContext);
    // console.log(singleToy);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-center mx-auto mt-10 mb-10">
                <figure><img src={singleToy?.picture}
                    alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleToy?.name}</h2>
                    <p>Price $:{singleToy?.price}</p>
                    <p>Rattings :{singleToy?.ratting}</p>
                    <p>Category :{singleToy?.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;