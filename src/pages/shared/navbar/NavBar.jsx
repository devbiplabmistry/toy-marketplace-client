
import logo from '../../../assets/logo_1_300x300.avif'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
    const { logOut,user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Log out sucessfully')
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="navbar bg-base-100  ">
                <div className='w-24 mr-10'>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-start lg:hidden md:block">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to="/allToy" className="btn btn-ghost normal-case text-xl">All Toys</Link>
                    {user?.email && <> <Link to="/myToy" className="btn btn-ghost normal-case text-xl">My Toys</Link>
                        <Link className="btn btn-ghost normal-case text-xl">Add A Toy</Link></>}
                    <Link className="btn btn-ghost normal-case text-xl">Blogs</Link>
                 {
                    user &&   <Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Logout</Link>
                 }
                </div>
                <div className="navbar-end">
                    <div className="rounded-full">
                        {
                            user?.email ? <button
                                data-te-toggle="tooltip"
                                data-te-placement="top"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                title={user?.email}>
                                <FaUserCircle></FaUserCircle>
                            </button> :
                               <Link to="/login"> <button className='text-cyan-400'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;