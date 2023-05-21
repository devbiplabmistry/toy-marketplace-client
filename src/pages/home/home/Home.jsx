
import FeedBack from '../../FeedBack/FeedBack';
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
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;