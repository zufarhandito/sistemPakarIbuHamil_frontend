import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Silahkan lakukan pendaftaran apabila belum mempunyai akun</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <label className="label mx-auto">
                    <span className="label-text-alt">Sudah punya akun? <NavLink to="/login" className="link link-hover text-primary">Login</NavLink></span>
                </label>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register