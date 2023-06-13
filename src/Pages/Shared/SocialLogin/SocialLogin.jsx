import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://summer-camp-phograpy-school-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className="flex justify-center mt-2">
            <button onClick={handleGoogleSignIn} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Google
            </button>
        </div>
    );
};

export default SocialLogin;