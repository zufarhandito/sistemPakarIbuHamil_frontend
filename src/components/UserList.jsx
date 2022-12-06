import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users,setUsers] = useState([]);
    const [image,setImage] = useState("");
    const [fullName,setFullName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [NIK,setNIK] = useState("");
    const [RT,setRT] = useState("");
    const [RW,setRW] = useState("");
    const [alamatLengkap,setAlamatLengkap] = useState("");
    const [tempatLahir,setTempatLahir] = useState("");
    const [tanggalLahir,setTanggalLahir] = useState("");
    const [noHP,setNoHP] = useState("");
    const [lainLain,setLainLain] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    const [status,setStatus] = useState(0);

    const saveUser = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users',{
                image: image,
                fullName: fullName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                password: password,
                role:role,
                NIK:NIK,
                RT:RT,
                RW:RW,
                alamatLengkap:alamatLengkap,
                tempatLahir:tempatLahir,
                tanggalLahir:tanggalLahir,
                noHP:noHP,
                lainLain: lainLain
            });
            navigate("/users");
            setMessage(response.data.message);
            getUsers();
            setStatus(response.status)
        } catch (error) {
            if(error.response){
                setStatus(error.response.status)
                setMessage(error.response.data.message);
            }
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async()=>{
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data.data);
    }

    const deleteUsers = async(userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    }

    // console.log(status)
  return (
    <div className="container mx-auto mt-10">
        <label htmlFor="my-modal-3" className="btn btn-primary my-7">Tambah Data</label>
                {/* The button to open modal */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative max-w-none w-2/3">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={saveUser} method="post" className="flex flex-col" enctype='multipart/form-data'>
                        {status === 200 && 
                        <div className="alert alert-success shadow-lg">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{message}</span>
                            </div>
                        </div>
                        }
                        {status === 400 && 
                        <div className="alert alert-error shadow-lg">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{message}</span>
                            </div>
                        </div>
                        }
                    <div className="sm:flex mb-7">
                        <div className="w-full lg:w-1/2">
                        <div className="flex flex-row form-control w-full ">
                            <div className="w-1/2 mr-3">
                                <label className="label">
                                <span className="label-text">Nama Depan</span>
                                </label>
                                <input required type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="John" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="w-1/2 ml-3">
                                <label className="label">
                                <span className="label-text">Nama Belakang</span>
                                </label>
                                <input required type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Doe"></input>
                            </div>
                        </div>
                        
                        <label className="label">
                            <span className="label-text">Nama Lengkap</span>
                        </label>
                        <input required type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="input input-bordered w-full" placeholder="John Davis Doe"></input>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered w-full" placeholder="johndoe@mail.com"></input>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full" placeholder="*****"></input>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setRole(e.target.value)}>
                                    <option disabled selected>Pilih Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="pakar">Pakar</option>
                                    <option value="pasien">Pasien</option>
                                </select>
                            </div>
                            <div className="w-1/2 ml-3">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setGender(e.target.value)}>
                                    <option disabled selected>Pilih Gender</option>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">NIK</span>
                        </label>
                        <input type="text" value={NIK} onChange={(e)=>setNIK(e.target.value)} className="input input-bordered w-full" placeholder="340412112345232"></input>
                        </div>
                        {/* divider */}
                        <div className="divider divider-horizontal"></div>
                        <div className="w-full lg:w-1/2">
                        <div className="flex flex-row form-control w-full ">
                            <div className="w-1/2 mr-3">
                                <label className="label">
                                <span className="label-text">RT</span>
                                </label>
                                <input type="text" value={RT} onChange={(e)=>setRT(e.target.value)} placeholder="43" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="w-1/2 ml-3">
                                <label className="label">
                                <span className="label-text">RW</span>
                                </label>
                                <input type="text" value={RW} onChange={(e)=>setRW(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="21"></input>
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">alamatLengkap</span>
                        </label>
                        <input type="text" value={alamatLengkap} onChange={(e)=>setAlamatLengkap(e.target.value)} className="input input-bordered w-full" placeholder="Bleberan"></input>
                        <div className="flex flex-row">
                            <div className="w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text">tempatLahir</span>
                                </label>
                                <input type="text" value={tempatLahir} onChange={(e)=>setTempatLahir(e.target.value)} className="input input-bordered w-full" placeholder="Ngemplak"></input>
                            </div>
                            <div className="w-1/2 ml-3">
                                <label className="label">
                                    <span className="label-text">tanggalLahir</span>
                                </label>
                                <input type="date" value={tanggalLahir} onChange={(e)=>setTanggalLahir(e.target.value)} className="input input-bordered w-full" placeholder="Sleman"></input>
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">noHP</span>
                        </label>
                        <input type="text" value={noHP} onChange={(e)=>setNoHP(e.target.value)} className="input input-bordered w-full" placeholder="DI Yogyakarta"></input>
                        <label className="label">
                            <span className="label-text">Lain Lain</span>
                        </label>
                        <textarea type="text" value={lainLain} onChange={(e)=>setLainLain(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Keterangan tambahan (misal: alergi)"></textarea>
                        </div>
                    </div>
                        <button htmlFor="my-modal-3" type="submit" className="flex btn w-1/3 mx-auto btn-primary">submit</button>
                    </form>
                </div>
                </div>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Gender</th>
                <th>Tempat / <br/> Tanggal Lahir</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
                {users.map((a,b)=>(
                    <tr key={a.uuid}>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={a.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{a.firstName} {a.lastName}</div>
                        <div className="text-sm opacity-50">{a.role}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {a.email}
                    </td>
                    <td>
                    {a.alamatLengkap}
                    <br/>
                    <span className="badge badge-ghost badge-sm">RT {a.RT} / RW {a.RW}</span>
                    </td>
                    <td>{a.gender}</td>
                    <td>
                        <div>{a.tempatLahir}</div>
                        <div className="text-sm opacity-70">{a.tanggalLahir}</div>
                    </td>
                    <th>
                        <Link to={`/users/edit/${a.uuid}`} className="btn btn-ghost btn-xs">Edit</Link>
                        <button onClick={()=>deleteUsers(a.uuid)} className="btn btn-error btn-xs">X</button>
                    </th>
                    </tr>
                ))}
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Gender</th>
                <th>Tempat / <br/> Tanggal Lahir</th>
                <th>Aksi</th>
            </tr>
            </tfoot>
            
        </table>
        </div>
    </div>
  )
}

export default UserList