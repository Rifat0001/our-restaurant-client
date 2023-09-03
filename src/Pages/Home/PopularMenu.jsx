import { useEffect, useState } from 'react';
import SectionHeading from '../../assets/components/SectionHeading';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <div className="md:px-36 px-0 md:py-6 py-0">
            <SectionHeading
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionHeading>
            <div className="grid my-10 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline hover:bg-indigo-500  border-b-4 border-indigo-500 border-0 ">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;