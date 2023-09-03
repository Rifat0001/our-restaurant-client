import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Try = () => {
    const [menu, setMenu] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
    }, [])
    const displayedMenu = showAll ? menu : menu.slice(0, 6);
    return (
        <div className="md:px-36 px-0 md:py-6 py-0">
            <hr className="mt-32" />
            <div className="grid my-10 md:grid-cols-2 gap-10">
                {
                    displayedMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <button onClick={() => setShowAll(true)} className="btn btn-outline hover:bg-indigo-500  border-b-4 border-indigo-500 border-0 ">View Full Menu</button>
            </div>

        </div>
    );
};

export default Try;