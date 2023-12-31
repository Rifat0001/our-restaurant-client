import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/menu'>Menu</Link>
        </li>
        <li>
            <Link to='/order'>Order</Link>
        </li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="flex items-center">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge ms-1 badge-secondary">+{cart?.length || 0}
                    </div>
                </button>
            </Link>
        </li>
        <li>
            <Link to='/secret'>Secret</Link>
        </li>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white md:px-32 px-0 md:py-4 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Restro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut} className="btn bg-indigo-500 hover:bg-indigo-600 border-0 text-white">Log Out <FaSignOutAlt></FaSignOutAlt> </button> :
                            <Link to='/login'><button className="btn bg-indigo-500 hover:bg-indigo-600 border-0 text-white"><FaSignInAlt></FaSignInAlt> Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;