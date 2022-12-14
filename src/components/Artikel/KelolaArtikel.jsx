import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const KelolaArtikel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.auth);
    const [articles,setArticles] = useState([]);
    const [message,setMessage] = useState("");
    const [category,setCategory] = useState([]);
    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [userId,setUserId] = useState("");
    const [caption,setCaption] = useState("");
    const [articleCategoryId,setArticleCategoryId] = useState("");

    useEffect(()=>{
        dispatch(getMe());
      },[dispatch]);
      
    useEffect(()=>{
        getArticle();
        getCategory();
    },[])

    const getArticle = async() => {
        const response = await axios.get('http://localhost:5000/article');
        setArticles(response.data.data);
    }

    const getCategory = async() => {
        const response = await axios.get('http://localhost:5000/articleCategory');
        setCategory(response.data.data);
    }

    const saveArticle = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/article',{
                image:image,
                title:title,
                content:content,
                caption:caption,
                userId:user&&user.id,
                articleCategoryId:articleCategoryId
            });
            getArticle();
            setMessage(response.data.message)
            navigate("/artikel");
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        } 
    }

    const deleteArticle = async(articleIdd) => {
        await axios.delete(`http://localhost:5000/article/${articleIdd}`);
        getArticle();
    }

// console.log(content)
  return (
    <div>
        <div className="container mx-auto w-fit shadow-xl rounded-box p-7">
            <div className="btn btn-primary w-full mb-5">Kelola Artikel</div>
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn btn-primary mb-3">Tambah</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box max-w-none w-1/2">
                    {
                        message && 
                        <div className="alert alert-success shadow-lg">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{message}</span>
                            </div>
                        </div>
                    }
                    <h3 className="font-bold text-lg text-primary">Tambah artikel</h3>
                        <form onSubmit={saveArticle}>
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Masukkan Link Gambar" className="input input-bordered w-full w-1/2" required />
                            <label className="label">
                                <span className="label-text">Judul</span>
                            </label>
                            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Masukkan judul" className="input input-bordered w-full w-1/2" required />
                            </div>
                            <label className="label">
                                <span className="label-text">Kategori</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setArticleCategoryId(e.target.value)} required>
                                <option disabled selected>Pilih Kategori</option>
                                {category.map((a,i)=>(
                                    <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                            </select>
                            <label className="label">
                                <span className="label-text">Caption</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full h-32" placeholder="Bio" value={caption} onChange={(e)=>setCaption(e.target.value)} required></textarea>
                            <label className="label">
                                <span className="label-text">Konten</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full h-60" placeholder="Bio" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
                            <div className='flex justify-end'>
                                <div className="modal-action">
                                <button type='submit' className="btn btn-primary">Submit</button>
                                <label htmlFor="my-modal" className="btn btn-outline btn-primary">Kembali</label>
                                </div>
                            </div>
                        </form>
                </div>
                </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>judul</th>
                        <th>caption</th>
                        <th>isi</th>
                        <th>kategori</th>
                        <th>tanggal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((a,i)=>(
                        <tr key={a.uuid}>
                            <td>{i+1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={a.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{a.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="w-60">
                                <p className="text-ellipsis overflow-hidden">{a.caption}</p>
                                </div>
                            </td>
                            <td>
                                <div className="w-96">
                                <p className="text-ellipsis overflow-hidden">{a.content}</p>
                                </div>
                            </td>
                            <td>{a.articleCategory.name}</td>
                            <td>{a.createdAt}</td>
                            <td>
                                <Link to={`/artikel/edit/${a.uuid}`} className="btn btn-warning mr-2">Edit</Link>
                                <button onClick={(e)=>deleteArticle(a.uuid)} className="btn btn-error">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default KelolaArtikel