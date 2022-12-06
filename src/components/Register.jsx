import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
    const [fullName,setFullName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [message,setMessage] = useState("");
    const [messagePass,setMessagePass] = useState("");

    const register = async(e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            setMessagePass("Password tidak sama!")
        }else{
            try {
                const response = await axios.post('http://localhost:5000/register',{
                    fullName: fullName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    gender: gender,
                    password: password,
                });
                setMessage(response.data.message)
            } catch (error) {
                if(error.response){
                    setMessage(error.response.data.message);
                }
            }
        }
    }
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <form method='post' onSubmit={register}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Silahkan lakukan pendaftaran apabila belum mempunyai akun</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                                    {messagePass && 
                                    <div className="alert alert-error shadow-lg">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{messagePass}</span>
                                        </div>
                                    </div>}
                                    {message && 
                                    <div className="alert alert-success shadow-lg">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{message}</span>
                                        </div>
                                    </div>
                                    }
                            <div className="flex flex-row ">
                                <div className="w-1/2 mr-2">
                                    <label className="label">
                                        <span className="label-text">Nama Depan</span>
                                    </label>
                                    <input type="text" placeholder="John" className="input input-bordered w-full" onChange={(e)=>setFirstName(e.target.value)} required />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="label">
                                        <span className="label-text">Nama Belakang</span>
                                    </label>
                                    <input type="text" placeholder="Doe" className="input input-bordered w-full" onChange={(e)=>setLastName(e.target.value)} required />
                                </div>
                            </div>
                        <label className="label">
                            <span className="label-text">Nama Lengkap</span>
                        </label>
                        <input type="text" placeholder="John David Joe" className="input input-bordered" onChange={(e)=>setFullName(e.target.value)} required />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="johnd@mail.com" className="input input-bordered" onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setGender(e.target.value)} required >
                                <option disabled selected>Pilih Gender</option>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="****" className="input input-bordered" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="****" className="input input-bordered" onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="form-control mt-6">
                        <button type='submit'  className="btn btn-primary">Register</button>
                        <label className="label mx-auto">
                            <span className="label-text-alt">Sudah punya akun? <NavLink to="/login" className="link link-hover text-primary">Login</NavLink></span>
                        </label>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register