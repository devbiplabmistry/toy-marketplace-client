
import Works from '../../Works/Works';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopBy category/ShopByCategory';
import './Home.css'

const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <Gallery></Gallery>
            <Works></Works>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;