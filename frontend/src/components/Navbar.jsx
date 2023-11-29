import { Link } from "react-router-dom";
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const[cookies, setCookies] =useCookies(["Access_token"]);
    const navigate=useNavigate();
    const logout=()=>{
        setCookies("Access_token", "");
        navigate('/login')
    }
    return (
        <div className="bg-teal-800">
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <Link to="/">
                        <img className="h-[70px]" src="https://raw.githubusercontent.com/CodeWaveWithAsante/FLAVORVERSE/main/src/images/logo.png" alt="" />
                    </Link>
                    <Link to="/" className="flex flex-row italic">
                        <h6 className="text-gray-400">FLAVOR</h6>
                        <h6 className="text-teal-600">VERSE</h6>
                    </Link>
                </div>

                <div className="flex-grow"></div> 

                <div className="align-items justify-items-end p-4 flex flex-row">
                   
                    <div className="m-2 p-2"><Link to="/createrecipe">Create Recipe</Link></div>
                    {!cookies.Access_token ?(<><div className="m-2 p-2"><Link to="/login">Login</Link></div><div className="m-2 p-2"><Link to="/signup">Signup</Link></div></>):(
                        <button onClick={logout}>Logout</button>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;
