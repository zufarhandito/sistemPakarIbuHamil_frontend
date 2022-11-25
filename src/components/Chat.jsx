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
    <div className="card-body">
        <h2 className="card-title">Layanan Konsultasi</h2>
        {user? 'Halo' : 'Anda perlu login untuk mulai konsultasi via chat'}
        <div className="card-actions justify-end">
        {user? "berhasil login" : <Link to="/login" className="btn btn-primary">Login</Link>}
    </div>
</div>
  )
}

export default Chat