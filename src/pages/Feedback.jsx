import React,{useEffect} from 'react'
import axios from 'axios'
import Layout from './Layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import { getMe } from '../features/authSlice';

const Feedback = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);
    const [message,setMessage] = useState("");
    const [feedback,setFeedback] = useState("");
    const [feedbacks,setFeedbacks] = useState([]);

    useEffect(()=>{
        dispatch(getMe());
      },[dispatch]);

    useEffect(()=>{
        getFeedback();
    },[])

    const getFeedback = async() => {
        const response = await axios.get('http://localhost:5000/feedback');
        setFeedbacks(response.data.data);
    }

    const saveFeedback = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/feedback',{
                feedback:feedback
            });
            setMessage(response.data.message)
            navigate("/feedback");
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }   
    }

    const deleteFeedback = async(feedbackId) => {
        await axios.delete(`http://localhost:5000/feedback/${feedbackId}`);
        getFeedback();
    }

  return (
    <div>
        <Layout/>
        {
            user&&user.role === "admin"? 
            <div className="container mx-auto mt-10 w-fit shadow-xl rounded-box p-7">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Feedback</th>
                        <th>Tanggal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((a,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{a.feedback}</td>
                            <td>{a.createdAt}</td>
                            <td>
                                <div className="btn btn-error btn-sm" onClick={()=>deleteFeedback(a.uuid)}>delete</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>:
        <div className="container mx-auto w-fit shadow-lg rounded-box p-10">
        <div className="btn btn-primary w-full mb-5">Feedback</div>
        <form onSubmit={saveFeedback}>
                {message && 
                <div className="alert alert-success shadow-lg mb-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{message}</span>
                    </div>
                </div>
                }
                <div className="form-control"> 
                    <textarea value={feedback} onChange={(e)=>setFeedback(e.target.value)} className="textarea textarea-bordered h-24 w-[600px]" placeholder="Feedback dapat berupa kritik, saran, maupun pertanyaan"></textarea>
                </div>
                <div className="flex justify-end">
                    <button type='submit' className="btn btn-primary mt-3">Kirim</button>
                </div>
            </form>
            <div className="divider"></div>

    </div>
        }
    </div>
  )
}

export default Feedback