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
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

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