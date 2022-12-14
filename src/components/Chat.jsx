import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Chat = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,user} = useSelector((state=> state.auth));
  
    useEffect(()=>{
      dispatch(getMe());
    },[dispatch]);
  

    
  return (
    <div className="card w-96 bg-primary text-primary-content h-full w-full">
      <div className="card-body">
        <h2 className="card-title">Tentang Aplikasi</h2>
        <p>Aplikasi ini dibangun untuk membantu ibu hamil dalam melakukan <span>screening</span> mandiri. Hasil aplikasi ini diperoleh berdasarkan aturan-aturan yang telah disepakati dokter spesialis kandungan</p>
        <div className="card-actions justify-end">
          <a href="https://id.wikipedia.org/wiki/Sistem_pakar" target="_blank" rel="noopener noreferrer" className="btn">Selengkapnya</a>
        </div>
      </div>
    </div>
  )
}

export default Chat