import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../assets/home/mennu.jpg'
import SectionHeading from "../../components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salad from "./Salad";
import Soup from "./Soup";
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');

    console.log(offered)
    return (
        <div >
            <Helmet>
                <title>Restro | Menu</title>
            </Helmet>
            <Cover className='bg-fixed' img={menuBg} title='Our Menu' description='Would you like to try a dish?'></Cover>
            <div className="md:px-36 px-0">
                <section>
                    <SectionHeading
                        heading={'Todays Offer'}
                        subheading={'---Don`t Miss---'}
                    ></SectionHeading>
                    <div className="grid my-10 md:grid-cols-2 gap-10">
                        {
                            offered.map(item => <MenuItem
                                key={item._id}
                                item={item}
                            ></MenuItem>)
                        }
                    </div>
                </section>
                <Dessert></Dessert>
                <Pizza></Pizza>
                <Soup></Soup>
                <Salad></Salad>
            </div >

        </div >
    );
};

export default Menu;