
import { useEffect, useState } from 'react';
import './ShopByCategory.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    const [Maths, setMath] = useState()
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const mathCategory = category.filter(c => c.category === 'math')
    console.log(mathCategory);
    return (
        <>
            <Tabs>
                <TabList className="flex justify-center gap-4">
                    <Tab></Tab>
                    <Tab>Math Category</Tab>
                    <Tab>Science Categor</Tab>
                    <Tab>Physics Categor</Tab>
                    <Tab>Chemistry Category</Tab>
                </TabList>
                <TabPanel>
                    <h2></h2>
                </TabPanel>
                <TabPanel>
                    {
                        mathCategory.map(m =><><img src={m.picture} alt="" />
                        {m.name}
                        </> )
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any 2 </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                    <h2>Any content </h2>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ShopByCategory;