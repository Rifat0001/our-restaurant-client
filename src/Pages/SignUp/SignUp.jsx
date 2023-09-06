import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import Lottie from "lottie-react";
import hero from "../../assets/register.json";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    // for navigate user after sign up 
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/');
            })
    }
    return (
        <div className="md:px-36 px-0">
            <Helmet>
                <title>Restro | Sign Up</title>
            </Helmet>
            <SectionHeading
                heading={"Sign Up Here"}
                subheading={"create a new account for login "}
            ></SectionHeading>
            <div className="hero bg-white ">
                <div className="hero-content  grid grid-cols-2 justify-center items-center">
                    <div className="w-full">
                        <Lottie className="w-full" animationData={hero} loop={true} />
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" {...register("name", { required: true })} className="input  border-black " />

                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input  border-black " /> {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo Url" className="input  border-black " /> {errors.photoURL && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/
                                })} name="password" placeholder="password" className="input border-black " />

                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {
                                    errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>
                                }
                                {
                                    errors.password?.type === 'pattern' && <span className="text-red-600">Password have one uppercase lowercase number and special character</span>
                                }
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" className="btn bg-indigo-500 text-white hover:text-xl hover:bg-indigo-600 hover:font-bold" value='Sign Up' />
                            </div>
                            <p>Already have an account? <Link to='/login' className='text-primary font-semibold'>Login</Link>  </p>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;