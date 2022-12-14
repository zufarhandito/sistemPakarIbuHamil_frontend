import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Layout from '../Layout'

const EditCategory = () => {
    const [name,setName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const [message,setMessage] = useState("");

    const updateCategory = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/articleCategory/${id}`,{
                name:name,
            });
            navigate("/category")
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    useEffect(()=>{
        const getCategoryById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/articleCategory/${id}`);
            setName(response.data.data.name);
          } catch (error) {
            if(error.response){
              setMessage(error.response.data.message);
          }
          }
        }
        getCategoryById();
      },[id])
      
  return (
    <div>
        <Layout/>
        <div className="container mx-auto my-7 w-1/3 p-7 rounded-box shadow-md">
            <form onSubmit={updateCategory}>
                <div className="form-control w-full">
                    <h1 className="text-lg font-bold text-indigo-500">Edit Kategori</h1>
                <label className="label">
                    <span className="label-text">Nama Kategori</span>
                </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Abortus" className="input input-bordered w-full" />
                </div>
                <button htmlFor="my-modal-3" type="submit" className="btn btn-primary mt-5 w-full ">submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditCategory