import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Layout from './Layout';


const EditGejala = () => {
    const [name,setName] = useState("");
    const [gejala,setGejala] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const [message,setMessage] = useState("");

    const getGejala = async() => {
        const response = await axios.get('http://localhost:5000/gejala');
        setGejala(response.data.data);
    }

    const updateGejala = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/gejala/${id}`,{
                name:name,
            });
            navigate("/gejalas")
            getGejala();
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    useEffect(()=>{
        const getGejalaById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/gejala/${id}`);
            setName(response.data.data.name);
          } catch (error) {
            if(error.response){
              setMessage(error.response.data.message);
          }
          }
        }
        getGejalaById();
      },[id])

  return (
    <div>
        <Layout/>
        <div className="container mx-auto my-7 w-1/3 p-7 rounded-box shadow-md">
            <form onSubmit={updateGejala}>
                <div className="form-control w-full">
                    <h1 className="text-lg font-bold text-indigo-500">Edit Gejala</h1>
                <label className="label">
                    <span className="label-text">Nama Gejala</span>
                </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Abortus" className="input input-bordered w-full" />
                </div>
                <button htmlFor="my-modal-3" type="submit" className="btn btn-primary mt-5 w-full ">submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditGejala