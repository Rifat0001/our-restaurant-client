import Banner from './Banner';
import CallUs from './CallUs';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Recommended from './Recommended';

const Home = () => (
    <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CallUs />
        <Recommended></Recommended>
    </div>
);

export default Home;