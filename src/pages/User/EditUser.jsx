import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import { getMe } from '../../features/authSlice';
import Layout from '../Layout';

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state=>state.auth));
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
    const {id} = useParams();

    useEffect(()=>{
        const getUserById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setImage(response.data.data.image);
            setFirstName(response.data.data.firstName);
            setFullName(response.data.data.fullName);
            setLastName(response.data.data.lastName);
            setEmail(response.data.data.email);
            setGender(response.data.data.gender);
            setPassword(response.data.data.password);
            setRole(response.data.data.role);
            setNIK(response.data.data.NIK);
            setRT(response.data.data.RT);
            setRW(response.data.data.RW);
            setAlamatLengkap(response.data.data.alamatLengkap);
            setTempatLahir(response.data.data.tempatLahir);
            setTanggalLahir(response.data.data.tanggalLahir);
            setNoHP(response.data.data.noHP);
            setLainLain(response.data.data.lainLain);
          } catch (error) {
            if(error.response){
              setMessage(error.response.data.message);
          }
          }
        }
        getUserById();
      },[id])

      const updateUser = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`,{
                image:'',
                fullName: fullName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                password: password,
                role: role,
                NIK: NIK,
                RT: RT,
                RW: RW,
                alamatLengkap:alamatLengkap,
                tempatLahir:tempatLahir,
                tanggalLahir:tanggalLahir,
                noHP:noHP,
                lainLain: lainLain
            });
            navigate("/users")
            // getUsers();
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }
console.log(role)
  return (
    <div>
        <Layout/>
        <div className="container mx-auto my-10 w-1/2 shadow-lg p-10 rounded-box">
            <div className="btn btn-primary w-full">Edit User</div>
            <form onSubmit={updateUser} className="flex flex-col">
            {message}
            <div className="sm:flex mb-7">
                <div className="w-full lg:w-1/2">
                {/* <input type="file" className="file-input file-input-bordered file-input file-input-warning w-1/2 my-4" /> */}
                <div className="flex flex-row form-control w-full ">
                    <div className="w-1/2 mr-3">
                        <label className="label">
                        <span className="label-text">Nama Depan</span>
                        </label>
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="John" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="label">
                        <span className="label-text">Nama Belakang</span>
                        </label>
                        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Doe"></input>
                    </div>
                </div>
                
                <label className="label">
                    <span className="label-text">Nama Lengkap</span>
                </label>
                <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="input input-bordered w-full" placeholder="John Davis Doe"></input>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered w-full" placeholder="johndoe@mail.com"></input>
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="Modifikasi password dilarang" className="input input-bordered w-full max-w-xs" disabled />
                <div className="flex flex-row">
                    <div className="w-1/2 mr-3">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                    <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setRole(e.target.value)}>
                            {/* <option disabled selected>Pilih Role</option> */}
                            <option value="admin" selected={role === "admin"}>Admin</option>
                            <option value="pasien" selected={role === "pasien"}>Pasien</option>
                        </select>
                    </div>
                    <div className="w-1/2 ml-3">
                    <label className="label">
                    <span className="label-text">Gender</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setGender(e.target.value)}>
                            {/* <option disabled selected>Pilih Gender</option> */}
                            <option value="Laki-Laki" selected={gender === "Laki-Laki"}>Laki-Laki</option>
                            <option value="Perempuan" selected={gender === "Perempuan"}>Perempuan</option>
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
                    <span className="label-text">Alamat Lengkap</span>
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
                    <span className="label-text">NO HP</span>
                </label>
                <input type="text" value={noHP} onChange={(e)=>setNoHP(e.target.value)} className="input input-bordered w-full" placeholder="08..."></input>
                <label className="label">
                    <span className="label-text">Keterangan</span>
                </label>
                <textarea type="text" value={lainLain} onChange={(e)=>setLainLain(e.target.value)} className="input input-bordered w-full h-32" placeholder="Keterangan tambahan (misal: alergi)"></textarea>
                </div>
            </div>
            <button htmlFor="my-modal-3" type="submit" className="flex btn w-1/3 mx-auto btn-primary">submit</button>
            </form>  
        </div>

    </div>
  )
}

export default EditUser