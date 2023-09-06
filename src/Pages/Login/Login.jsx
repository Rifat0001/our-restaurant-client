import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SectionHeading from '../../components/SectionHeading'
import hero from "../../assets/login.json";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    // for navigate user after login 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // firebase sign in start here 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Loin Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const [disabled, setDisabled] = useState(true);
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="md:px-36 md:pb-20 pb-0 px-0">
            <Helmet>
                <title>Restro | Login</title>
            </Helmet>
            <SectionHeading
                heading={"Login Here"}
                subheading={"With your account information"}
            ></SectionHeading>
            <div className="hero bg-white">
                <div className="hero-content  grid grid-cols-2 justify-center items-center">
                    <div className="w-full">
                        <Lottie className="w-full" animationData={hero} loop={true} />
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input  border-black " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input border-black " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-lg text-indigo-500">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type captcha then click outside" className="input border-black " />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" className="btn bg-indigo-500 text-white hover:text-xl hover:bg-indigo-600 hover:font-bold " value='Login' />
                            </div>
                            <p>New in this website? <Link to='/signup' className='text-primary font-semibold'>Sign up</Link>  </p>
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;