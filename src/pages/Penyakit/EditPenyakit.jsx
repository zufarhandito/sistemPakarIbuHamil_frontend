import {React, useEffect, useState}from 'react';
import Layout from '../Layout';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams} from 'react-router-dom';
import { getMe } from '../../features/authSlice';
import axios from 'axios';

const EditPenyakit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state=> state.auth));
    const [name,setName] = useState("");
    const [keterangan,setKeterangan] = useState("");
    const [solusi,setSolusi] = useState("");
    const [message,setMessage] = useState("");
    const {id} = useParams();

    useEffect(()=>{
      const getPenyakitById = async()=>{
        try {
          const response = await axios.get(`http://localhost:5000/penyakit/${id}`);
          setName(response.data.data.name);
          setKeterangan(response.data.data.keterangan);
          setSolusi(response.data.data.solusi)
        } catch (error) {
          if(error.response){
            setMessage(error.response.data.message);
        }
        }
      }
      getPenyakitById();
    },[id])

    

    const updatePenyakit = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/penyakit/${id}`,{
                name: name,
                keterangan: keterangan,
                solusi: solusi
            });
            navigate("/penyakits")
            // getPenyakit();
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }
  
    useEffect(()=>{
      dispatch(getMe());
    },[dispatch]);
  
    useEffect(()=>{
      if(isError){
        navigate("/login");
      }
    },[isError,navigate]);
  return (
    <div>
        <Layout/>
        <div className="container mx-auto lg:w-1/3 shadow-xl rounded-box p-10">
        <form onSubmit={updatePenyakit}>
                <p>{message}</p>
                <h3 className="rounded-box bg-primary py-3 text-center mt-3 font-bold text-lg text-white mb-3">Edit Data Penyakit</h3>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Nama Penyakit</span>
                </label>
                <input type="text" placeholder="Abortus" value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text">Tingkat</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                    <option>Awas</option>
                    <option>Normal</option>
                    <option>Bahaya</option>
                </select>
                <div className="divider"></div>
                <label className="label">
                    <span className="label-text">Keterangan</span>
                </label>
                <textarea className="textarea textarea-bordered w-full h-40" value={keterangan} onChange={(e)=>setKeterangan(e.target.value)} placeholder="Abortus adalah..."></textarea>
                <label className="label">
                    <span className="label-text">Solusi</span>
                </label>
                <textarea className="textarea textarea-bordered w-full h-30" value={solusi} onChange={(e)=>setSolusi(e.target.value)} placeholder="Segera bawa ke faskes terdekat"></textarea>
                <button type="submit" className="flex btn btn-primary mt-5">submit</button>
        </form>
        </div>
    </div>
  )
}

export default EditPenyakit