import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PenyakitList = () => {
    const [penyakits,setPenyakit] = useState([]);
    const [name,setName] = useState("");
    const [keterangan,setketerangan] = useState("");
    const [solusi,setSolusi] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    const savePenyakit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/penyakit',{
                name: name,
                keterangan: keterangan,
                solusi: solusi
            });
            getPenyakit();
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    useEffect(()=>{
        getPenyakit();
    },[])

    const getPenyakit = async()=>{
        const response = await axios.get("http://localhost:5000/penyakit");
        setPenyakit(response.data.data)
    }

    const deletePenyakit = async(penyakitId) => {
        await axios.delete(`http://localhost:5000/penyakit/${penyakitId}`);
        getPenyakit();
    }

  return (
    <div className="container mx-auto mt-10">
            <div className="w-full overflow-auto shadow-xl rounded-box">
                <table className="table shadow-md w-full">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Penyakit</th>
                    <th>Deskripsi</th>
                    <th>Solusi</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {penyakits.map((p,index)=>(
                    <tr key={p.uuid}>
                        <td>{index+1}</td>
                        <td>
                            <div>
                                <div className="font-bold">{p.name}</div>
                                <div className="text-sm opacity-50">Bahaya</div>
                            </div>

                        </td>
                        <td>
                            <div className='w-96 truncate'>{p.keterangan}</div>
                        </td>
                        <td>
                            <div className="w-96 truncate">{p.solusi}</div>
                        </td>
                        <td>
                            <Link to={`/penyakits/edit/${p.uuid}`} className="btn btn-ghost btn-xs">Edit</Link>
                            <button onClick={()=>deletePenyakit(p.uuid)} className="btn btn-error btn-xs">X</button>
                        </td>
                    </tr>
                ))}
                
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                <tr>
                    <th></th>
                    <th>Nama Penyakit</th>
                    <th>Deskripsi</th>
                    <th>Solusi</th>
                    <th>Aksi</th>
                </tr>
                </tfoot>
                
                </table>    
        </div>
    </div>
  )
}

export default PenyakitList