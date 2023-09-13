import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Drawer = () => {
    const [cart] = useCart();
    const isAdmin = false;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */} <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#d1a054] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaUtensilSpoon></FaUtensilSpoon> Add items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaWallet></FaWallet> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaBook></FaBook> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers'><FaUser></FaUser> All Users</NavLink>
                            </li>
                            <li >
                                <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="flex items-center">
                                        <FaShoppingCart></FaShoppingCart>
                                        <div className="badge ms-1 badge-secondary">+{cart?.length || 0} </div>
                                    </span>
                                </NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaCalendar></FaCalendar> Reservations</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink>
                            </li>
                            <li >
                                <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="flex items-center">
                                        <FaShoppingCart></FaShoppingCart>
                                        <div className="badge ms-1 badge-secondary">+{cart?.length || 0} </div>
                                    </span>
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Drawer;