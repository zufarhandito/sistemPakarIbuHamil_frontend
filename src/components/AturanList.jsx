import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const AturanList = () => {
    const [aturans,setAturan] = useState([]);
    const [namaPenyakit,setNamaPenyakit] = useState("");
    const [listGejala,setListGejala] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        getAturan();
    },[])

    const getAturan = async() => {
        const response = await axios.get('http://localhost:5000/aturan');
        setAturan(response.data.data)
    }

  return (
    <div className="container mx-auto mt-10 w-fit shadow-lg p-8">
        <Link to="/aturans/tambah" className="btn btn-primary my-3">Tambah</Link>
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
            {aturans.map((a,b)=>(
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