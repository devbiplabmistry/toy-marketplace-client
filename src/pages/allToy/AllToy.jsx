import { useLoaderData } from "react-router-dom";
import AllToyDetails from "./AllToyDetails";

const AllToy = () => {
    const addToy = useLoaderData()
    console.log(addToy);
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                {
                    addToy.map(toy => <AllToyDetails key={toy._id} toys={toy}></AllToyDetails>)
                }
            </table>
        </div>
    );
};

export default AllToy;