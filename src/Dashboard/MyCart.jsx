import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (items) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${items._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Food is deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full py-10 px-10">
            <Helmet>
                <title>Restro | My Cart</title>
            </Helmet>
            <div className="flex items-center font-semibold justify-evenly gap-10">
                <h3 className="text-3xl">Total Items : {cart.length}</h3>
                <h3 className="text-3xl">Total Price : ${total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((items, index) => <tr key={items._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={items.image} />
                                    </div>
                                </td>
                                <td>
                                    {items.name}
                                </td>
                                <td className="text-end">
                                    ${items.price}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(items)} className="btn btn-sm bg-red-600 text-white">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)}
                        </tbody>

                    </table>
                </div>
            </div >
        </div >
    );
};

export default MyCart;