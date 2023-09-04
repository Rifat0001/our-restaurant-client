import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import CallUs from './CallUs';
import Category from './Category';
import Freatured from './Freatured';
import PopularMenu from './PopularMenu';
import Recommended from './Recommended';
import Testimonial from './Testimonial';

const Home = () => (
    <div>
        <Helmet>
            <title>Restro | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CallUs />
        <Recommended></Recommended>
        <Freatured></Freatured>
        <Testimonial></Testimonial>
    </div>
);

export default Home;