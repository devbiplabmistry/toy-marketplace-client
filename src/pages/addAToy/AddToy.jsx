
import Swal from "sweetalert2";
const AddToy = () => {


    const handleAdded = (event) => {
        event.preventDefault()
        const form =event.target;
        const url =form.photo.value;
        const name =form.name.value;
        const sellerName =form.sellerName.value;
        const sellerEmail =form.sellerEmail.value;
        const subQuantity =form.subQuantity.value;
        const price =form.price.value;
        const rattings =form.ratting.value;
        const AvailableQuantity=form.availableQuantity.value;
        const discription=form.discription.value;
        const Details ={
            url,
            name,
            sellerName,
            sellerEmail,
            subQuantity,
            price,
            rattings,
            AvailableQuantity,
            discription
        }
        fetch('http://localhost:5000/addToy',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(Details)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire(
                'You sucessfully Added!',
                'You clicked the button!',
                'success'
              )
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col text-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center mb-10">Here You Can Add A Toy</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleAdded}>
                        <div className="card-body md:grid md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url of toy" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">seller Name</span>
                                </label>
                                <input type="text" name="sellerName" placeholder="seller name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" name="sellerEmail" placeholder="seller Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Quantity</span>
                                </label>
                                <input type="text" name="subQuantity" placeholder="sub quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rattings</span>
                                </label>
                                <input type="text" name="ratting" placeholder="rattings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name="availableQuantity" placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Discription</span>
                                </label>
                                <input type="text" name="discription" placeholder="details discription" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6 mb-6">
                            <button type="submit" className="btn btn-primary">Add A Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;