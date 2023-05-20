import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyDetails from './MyToyDetails';

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [userToy, setUserToy] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alltoy')
            .then(res => res.json())
            .then(data => setUserToy(data))
    }, [])

  
    const myToys= userToy.filter(toy => toy.sellerEmail == user?.email)
    console.log(myToys);
  
  
    const handleDelete = (id) => {
        const remaining =myToys.filter(toy=>toy._id !=id)
        setUserToy(remaining)
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>photo</th>
                        <th>seller</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Discription</th>
                        <th>Available Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    myToys.map(toys => <MyToyDetails handleDelete={handleDelete} key={toys._id} toy={toys}></MyToyDetails>)
                }
            </table>
        </div>
    );
};

export default MyToy;