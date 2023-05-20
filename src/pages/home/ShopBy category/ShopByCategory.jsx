
import {  useEffect, useState } from 'react';
import './ShopByCategory.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import {  Link } from 'react-router-dom'


const ShopByCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const mathCategory = category.filter(c => c.category === 'math')
    const scienceCategory = category.filter(s => s.category === 'science')
    const physicsCategory = category.filter(p => p.category === 'physics toy')

    return (
        < div>
        <h1 className='text-center font-bold text-6xl mt-5 mb-10 text-orange-400'>Shop By Category</h1>
            <Tabs>
                <TabList className="flex justify-center gap-4 mb-4">
                    <Tab></Tab>
                    <Tab className="border-2 font-medium bg-slate-950 text-white p-2 rounded-lg">Math Category</Tab>
                    <Tab className="border-2 font-medium bg-slate-950 text-white p-2 rounded-lg">Science Category</Tab>
                    <Tab className="border-2 font-medium bg-slate-950 text-white p-2 rounded-lg">Physics Category</Tab>
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
                              <Link to={`/toy/${m._id}`}><button className="btn btn-active btn-secondary mt-4 mb-4">View Details</button></Link>
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
                            <Link to={`/toy/${s._id}`}><button className="btn btn-active btn-secondary mt-4 mb-4">View Details</button></Link>
                        </div>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        physicsCategory.map(p => <div key={p._id}><img src={p.picture} alt="" />
                            {p.name}
                            <p>Price $:{p.price}</p>
                            <p>Ratting:{p.ratting}</p>
                            <Link to={`/toy/${p._id}`}><button className="btn btn-active btn-secondary mt-4 mb-4">View Details</button></Link>
                        </div>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;