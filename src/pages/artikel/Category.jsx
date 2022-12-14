import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../Layout'

const Category = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const [category,setCategory] = useState([]);

    const getCategory = async() => {
        const response = await axios.get('http://localhost:5000/articleCategory');
        setCategory(response.data.data);
    }

    const saveCategory = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/articleCategory',{
                name:name
            });
            getCategory();
            setMessage(response.data.message)
            navigate("/category");
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }   
    }

    useEffect(()=>{
        getCategory();
    },[])

    const deleteCategory = async(id) => {
        await axios.delete(`http://localhost:5000/articleCategory/${id}`);
        getCategory();
    }
  return (
    <div>
        <Layout/>
        <div className="md:flex container mx-auto mt-10">
        <div className="lg:w-1/2 shadow-md p-7 rounded-box">
            {message &&
                <div className="alert alert-success shadow-lg">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{message}</span>
                    </div>
                </div>    
        }
        <div className="btn btn-primary w-full my-5">Tambah Kategori</div>
            <form onSubmit={saveCategory} method="post">
                <label className="label">
                <span className="label-text">Nama Kategori</span>
                </label>
                <input required type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Info,tips,tutorial,dll" className="input input-bordered w-full max-w-xs mr-5" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="lg:w-1/2 shadow-md p-7 rounded-box max-h-screen overflow-y-auto">
            <div className="btn btn-primary w-full my-5">Daftar Kategori</div>
            <table className="table w-full overflow-y-auto">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Kategori</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {category.map((a,b)=>(
                    <tr key={a.uuid}>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div>
                            <div className="font-bold">{b+1}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {a.name}
                        </td>
                        <td>
                            <Link to={`/category/edit/${a.uuid}`} className="btn btn-ghost btn-xs">Edit</Link>
                            <button onClick={()=>deleteCategory(a.uuid)} className="btn btn-error btn-xs">X</button>
                        </td>
                    </tr>
                ))}
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                <tr>
                    <th>No</th>
                    <th>Nama Kategori</th>
                    <th>Aksi</th>
                </tr>
                </tfoot>
                
            </table>
        </div>
    </div>
    </div>
  )
}

export default Category