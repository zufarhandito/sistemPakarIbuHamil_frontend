import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PenyakitList = () => {
    const [penyakits,setPenyakit] = useState([]);
    const [name,setName] = useState("");
    const [keterangan,setketerangan] = useState("");
    const [solusi,setSolusi] = useState("");
    const [message,setMessage] = useState("");
    const [filter,setFilter] = useState("")
    const navigate = useNavigate();

    const savePenyakit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/penyakit',{
                name: name,
                keterangan: keterangan,
                solusi: solusi
            });
            setMessage(response.data.message)
            getPenyakit();
            navigate("/penyakits");
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
        <div className="sm:flex h-full">
            <div className="w-full overflow-auto shadow-xl p-7 rounded-box">
            <div className=" flex w-full justify-between">
                <label htmlFor="my-modal-3" className="shadow-xl btn btn-primary my-7">Tambah Data</label>
                <div className="form-control justify-center">
                <div className="input-group">
                    <input type="text" placeholder="Search…" onChange={(e)=>setFilter(e.target.value)} className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </div>
            </div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={savePenyakit} method="post">
                            {message && 
                            <div className="alert alert-success shadow-lg">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{message}</span>
                                </div>
                            </div>}
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Nama Penyakit</span>
                        </label>
                        <input required type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Abortus" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="divider"></div>
                        <label className="label">
                            <span className="label-text">Deskripsi</span>
                        </label>
                        <textarea value={keterangan} onChange={(e)=>setketerangan(e.target.value)} className="textarea textarea-bordered w-full h-40" placeholder="Abortus adalah..."></textarea>
                        <label className="label">
                            <span className="label-text">Solusi</span>
                        </label>
                        <textarea value={solusi} onChange={(e)=>setSolusi(e.target.value)} className="textarea textarea-bordered w-full h-30" placeholder="Segera bawa ke faskes terdekat"></textarea>
                        <button htmlFor="my-modal-3" type="submit" className="btn btn-blue w-full ">submit</button>
                    </form>
                </div>
                </div>

                <table className="table w-full">
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
                {penyakits.filter(penyakit=>penyakit.name.toLowerCase().includes(filter.toLowerCase())).map((p,index)=>(
                    <tr key={p.uuid}>
                        <td>{index+1}</td>
                        <td>
                            <div>
                                <div className="font-bold">{p.name}</div>
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
    </div>
  )
}

export default PenyakitList