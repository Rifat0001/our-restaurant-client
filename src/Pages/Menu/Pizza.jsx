import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import chef from '../../assets/home/pizza.jpg'
import { useState } from "react";
const Pizza = () => {
    const [showAll, setShowAll] = useState(false)
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === 'pizza');
    const displayItems = showAll ? pizza : pizza.slice(0, 6);
    return (
        <div className="md:py-8 py-4">
            <Cover img={chef} title={"pizza"} description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis earum explicabo veniam voluptate. Deserunt provident omnis reiciendis perferendis quae cum praesentium exercitationem dignissimos '}></Cover>
            <div className="grid my-10 md:grid-cols-2 gap-10">
                {
                    displayItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            {!showAll && (
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn btn-outline hover:bg-indigo-500  border-b-4 border-indigo-500 border-0 "
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pizza;