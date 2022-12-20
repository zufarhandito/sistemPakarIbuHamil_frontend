import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const AturanList = () => {
    const [aturans,setAturan] = useState([]);
    const [namaPenyakit,setNamaPenyakit] = useState("");
    const [listGejala,setListGejala] = useState("");
    const navigate = useNavigate();
    const [filter,setFilter] = useState("")

    useEffect(()=> {
        getAturan();
    },[])

    const getAturan = async() => {
        const response = await axios.get('http://localhost:5000/aturan');
        setAturan(response.data.data)
    }

  return (
    <div className="container mx-auto mt-10 w-fit shadow-lg p-8">
        <div className=" flex w-full justify-between">
        <Link to="/aturans/tambah" className="btn btn-primary my-3">Tambah</Link>
                <div className="form-control justify-center">
                <div className="input-group">
                    <input type="text" placeholder="Search…" onChange={(e)=>setFilter(e.target.value)} className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </div>
            </div>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
            <tr>
                <th>No</th>
                <th>Nama Penyakit</th>
                <th>Gejala</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
            {/* <!-- row 1 --> */}
            {aturans.filter(aturan=>aturan.name.toLowerCase().includes(filter.toLowerCase())).map((a,b)=>(
                            <tr key={b}>
                            <td>
                                {b+1}
                            </td>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                <div className="font-bold">{a.name}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                                <div className="max-w-[800px]">
                                    {a.gejalas.map((c,d)=>(
                                        <li>{c.name} </li>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <Link to={`/aturans/edit/${a.id}`} className="btn btn-ghost btn-xs">Details</Link>
                            </td>
                        </tr>
            ))}
            </tbody>
            {/* <!-- foot --> */}
            <tfoot>
            <tr>
                <th>No</th>
                <th>Nama Penyakit</th>
                <th>Gejala</th>
                <th>Aksi</th>
            </tr>
            </tfoot>
        </table>
        </div>
    </div>
  )
}

export default AturanList