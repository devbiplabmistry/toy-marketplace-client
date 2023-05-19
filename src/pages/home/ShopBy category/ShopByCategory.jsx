
import { useContext, useEffect, useState } from 'react';
import './ShopByCategory.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {  useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const ShopByCategory = () => {
    const { user,setSingleToy } = useContext(AuthContext);
    const [category, setCategory] = useState([])
    // console.log(location);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const mathCategory = category.filter(c => c.category === 'math')
    const scienceCategory = category.filter(s => s.category === 'science')
    const physicsCategory = category.filter(p => p.category === 'physics toy')
    const Navigate = useNavigate()

    const handleDetails = (id) => {
        if (!user?.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to login First to view Details',
                footer: '<a href="">Why do I have this issue?</a>'

            })

            return Navigate("/login")
        }
        else {
            const View = category.find(cat => cat._id === id)
            // console.log(View);
            setSingleToy(View)
            Navigate("/ToyDetails")
        }


    }
    return (
        < div>
            <Tabs>
                <TabList className="flex justify-center gap-4 mb-4">
                    <Tab></Tab>
                    <Tab>Math Category</Tab>
                    <Tab>Science Category</Tab>
                    <Tab>Physics Category</Tab>
                </TabList>
                <TabPanel>
                    <h2></h2>
                </TabPanel>
                <TabPanel>
                    <div className='mt-10 mb-10'>
                        {
                            mathCategory.map(m => <div key={m._id}> <img className='rounded-lg' src={m.picture} alt="" />
                                {m.name}
                                <p>Price $:{m.price}</p>
                                <p>Ratting:{m.ratting}</p>
                                <button onClick={() => handleDetails(m._id)} className="btn btn-active btn-secondary mt-4 mb-4">View Details</button>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {
                        scienceCategory.map(s => <div key={s._id}><img src={s.picture} alt="" />
                            {s.name}
                            <p>Price $:{s.price}</p>
                            <p>Ratting:{s.ratting}</p>
                            <button onClick={() => handleDetails(s._id)} className="btn btn-active btn-secondary mt-4 mb-4">View Details</button>
                        </div>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        physicsCategory.map(p => <div key={p._id}><img src={p.picture} alt="" />
                            {p.name}
                            <p>Price $:{p.price}</p>
                            <p>Ratting:{p.ratting}</p>
                            <button onClick={() => handleDetails(p._id)} className="btn btn-active btn-secondary mt-4 mb-4">View Details</button>
                        </div>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;