import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { LogOut,reset } from '../features/authSlice';
import { getMe } from '../features/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state)=>state.auth);
    const logOut = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/")
    }

    useEffect(()=>{
        dispatch(getMe());
      },[dispatch]);

  return (
    <div>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/">Beranda</NavLink></li>
                <li><NavLink to="/penyakits">Penyakit</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                <li tabIndex={0}>
                <a className="justify-between">
                    Pakar
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                    <li><NavLink to="/gejalas">Gejala</NavLink></li>
                    <li><NavLink to="/aturans">Aturan</NavLink></li>
                </ul>
                </li>
                <li><NavLink to="/bantuan">Bantuan</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
            </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost normal-case text-xl">Si_kamil</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                <li><NavLink to="/">Beranda</NavLink></li>
                {user && user.role === "admin" && <li><NavLink to="/users">Users</NavLink></li>}
        <div className="dropdown dropdown-bottom ">
        {user && user.role === "admin" && 
            <div>
            <a tabIndex={0} className="btn btn-ghost font-normal normal-case text-base">Pakar <svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></a>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit ">
                <li><NavLink to="/penyakits">Penyakit</NavLink></li>
                <li><NavLink to="/gejalas">Gejala</NavLink></li>
                <li><NavLink to="/aturans">Aturan</NavLink></li>
            </ul>
            </div>
        }
                {user && user.role === "pakar" && 
            <div>
            <ul className="menu menu-horizontal p-0">
                <li><NavLink to="/penyakits">Penyakit</NavLink></li>
                <li><NavLink to="/gejalas">Gejala</NavLink></li>
                <li><NavLink to="/aturans">Aturan</NavLink></li>
            </ul>
            </div>
        }
        </div>
        <div className="dropdown dropdown-bottom ">
        {user && user.role === "admin" && 
            <div>
            <a tabIndex={0} className="btn btn-ghost font-normal normal-case text-base">Artikel <svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></a>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit ">
                <li><NavLink to="/artikel">Artikel</NavLink></li>
                <li><NavLink to="/category">Kategori</NavLink></li>
            </ul>
            </div>
        }
        </div>
                <li><NavLink to="/bantuan">Bantuan</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
            </ul>
        </div>

        <div className="navbar-end">
            {
                user ?
                <div className="flex place-items-center">
                    <div className="text-center grid place-content-center">
                        <p className="mb-1 mr-2">{user.firstName}</p>
                    </div>
                    <div className="dropdown dropdown-end place-items-center ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-2">
                            <div className="w-10 rounded-full">
                            <img src={user.image} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <NavLink to="/profile" className="justify-between">
                            Profile
                        </NavLink>
                        </li>
                        <li><a onClick={logOut}>Logout</a></li>
                    </ul>
                    </div>
                </div>
                : 
                <div className="grid grid-cols-2 place-items-center">
                    <Link to={"/login"} className="btn-ghost p-1 normal-case font-bold">Login</Link>
                    <Link to={"/register"} className="btn-ghost p-1 normal-case font-normal">Register</Link>
                </div>
            }
        </div>
        </div>
    </div>
  )
}

export default Navbar