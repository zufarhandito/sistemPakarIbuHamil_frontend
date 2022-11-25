import React from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut,reset } from '../features/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state)=>state.auth);
    const logOut = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/")
    }
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
                <li tabIndex={0}>
                <a className="justify-between">
                    Users
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                    <li><NavLink to="/pasiens">Pasien</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
                </li>
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
                <li><NavLink to="/rekams">Rekam</NavLink></li>
            </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost normal-case text-xl">Puskesmas</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                <li><NavLink to="/">Beranda</NavLink></li>
                <li><NavLink to="/penyakits">Penyakit</NavLink></li>
            <li tabIndex={0}>
                <a>
                Users
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2">
                <li><NavLink to="/pasiens">Pasien</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </li>
            <li tabIndex={0}>
                <a>
                Pakar
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2">
                    <li><NavLink to="/gejalas">Gejala</NavLink></li>
                    <li><NavLink to="/aturans">Aturan</NavLink></li>
                </ul>
            </li>
            <li><NavLink to="/rekams">Rekam</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={logOut}>Logout</a></li>
            </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar