import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Updated from "./Updated";

const Update = () => {
    const {user} =useContext(AuthContext)
    const [userToy, setUserToy] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => setUserToy(data))
    }, [])
const remaining =userToy.filter(toy=>toy.sellerEmail ===user.email)
console.log(remaining);


    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/allToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user updated successfully')
                }
            })
    }

    return (
       <>
       {
        remaining.map(updated=><Updated key={updated._id} updated={updated}></Updated>)
       }
       </>
    );
};

export default Update;