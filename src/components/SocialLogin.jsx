import { useContext } from 'react';
import google from '../assets/google.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // for navigate user after login 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Loin Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center">
                <button onClick={handleGoogle} className="btn hover:bg-white drop-shadow-lg border-2 border-indigo-100 bg-white">
                    <div className='flex items-center gap-2 justify-between'>
                        <img className='w-8' src={google} alt="" />
                        <p>Login with Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;