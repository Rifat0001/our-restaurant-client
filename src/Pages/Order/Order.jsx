import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import order from '../../assets/home/banner.jpg';
import { useContext, useState } from 'react';
import './Order.css'
import useMenu from '../../hooks/useMenu';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';
const Order = () => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const popular = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');

    const handleAddtoCard = (item) => {
        const { name, image, price, _id } = item;
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItem: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6366F1',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    const [selectedTab, setSelectedTab] = useState('popular'); // Default to 'pizza' tab

    // Filter the menu items based on the selected tab
    const filteredMenu = menu.filter(item => item.category === selectedTab);

    // Function to handle tab click
    const handleTabClick = (category) => {
        setSelectedTab(category);
    };

    return (
        <div>
            <Helmet>
                <title>Restro | Order</title>
            </Helmet>
            <Cover img={order} title={'Our Shop'} description={'Try some dishes that you like'}></Cover>
            <section className='md:my-8 my-4 md:px-36 px-0'>
                <div className='flex items-center mx-auto justify-center '>
                </div>
                <div>
                    <div className="tab-buttons   flex justify-center">
                        <button
                            className={selectedTab === 'popular' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('popular')}
                        >
                            Popular
                        </button>
                        <button
                            className={selectedTab === 'pizza' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('pizza')}
                        >
                            Pizza
                        </button>
                        <button
                            className={selectedTab === 'salad' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('salad')}
                        >
                            Salad
                        </button>
                        <button
                            className={selectedTab === 'soup' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('soup')}
                        >
                            Soup
                        </button>
                        <button
                            className={selectedTab === 'drinks' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('drinks')}
                        >
                            Drinks
                        </button>
                        <button
                            className={selectedTab === 'dessert' ? 'active-tab' : ''}
                            onClick={() => handleTabClick('dessert')}
                        >
                            Dessert
                        </button>
                    </div>
                    <div className="menu-items">
                        <div className='grid grid-cols-3 mt-8 gap-10 justify-center items-center'>
                            {filteredMenu.map((item) =>
                                <>
                                    <div className="card bg-base-100 text-center h-[500px] shadow-xl">
                                        <figure><img src={item.image} alt="Shoes" className='w-full' /></figure>
                                        <p className="bg-slate-900 text-white absolute top-4 right-4 px-2 py-1 rounded-lg
            ">${item.price}</p>
                                        <div className="card-body">
                                            <h2 className="font-bold">{item.name}</h2>
                                            <p>{item.recipe}</p>
                                            <div className="card-actions justify-center">
                                                <button onClick={() => handleAddtoCard(item)} className="btn btn-outline w-1/2 bg-[#E8E8E8]  uppercase border-b-4 border-0 text-indigo-500  hover:bg-indigo-500">
                                                    Add To cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Order;