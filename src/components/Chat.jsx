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
    // <div className="rounded-box shadow-xl p-3">
    //   <div className="card overflow-y-auto my-3 h-80 w-full">
    //     <div className="chat chat-start">
    //       {/* <div className="chat-image avatar">
    //         <div className="w-10 rounded-full">
    //           <img src={user && user.image} />
    //         </div>
    //       </div> */}
    //       <div className="chat-header">
    //         Obi-Wan Kenobi..
    //         <time className="text-xs opacity-50">12:45</time>
    //       </div>
    //       <div className="chat-bubble">You were the Chosen One!</div>
    //     </div>
    //     <div className="chat chat-end">
    //       {/* <div className="chat-image avatar">
    //         <div className="w-10 rounded-full">
    //           <img src="https://placeimg.com/192/192/people" />
    //         </div>
    //       </div> */}
    //       <div className="chat-header">
    //         Anakin
    //         <time className="text-xs opacity-50">12:46</time>
    //       </div>
    //       <div className="chat-bubble">I hate you!</div>
    //     </div>
    // </div>
    // <div className="form-control w-full">
    //   <label className="input-group">
    //     <input type="text" placeholder="type message.." className="input input-bordered w-full" />
    //     <div className="btn btn-primary">Send</div>
    //   </label>
    // </div>
    // </div>
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