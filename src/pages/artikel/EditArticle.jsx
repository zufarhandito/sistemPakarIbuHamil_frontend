import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Layout from '../Layout'

const EditArticle = () => {
    const [category,setCategory] = useState([]);
    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const {id} = useParams();
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    const [caption,setCaption] = useState("");
    const [articleCategoryId,setArticleCategoryId] = useState("");

    useEffect(()=>{
        getCategory();
        const getArticleById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/article/${id}`);
            setTitle(response.data.data.title);
            setContent(response.data.data.content);
            setCaption(response.data.data.caption);
            setImage(response.data.data.image);
          } catch (error) {
            if(error.response){
              setMessage(error.response.data.message);
          }
          }
        }
        getArticleById();
      },[id])

    const getCategory = async() => {
        const response = await axios.get("http://localhost:5000/articleCategory");
        setCategory(response.data.data);
    }

    const updateArticle = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/article/${id}`,{
                image:image,
                title:title,
                articleCategoryId:articleCategoryId,
                caption:caption,
                content:content
            });
            navigate("/artikel")
            // getGejala();
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

  return (
    <div>
        <Layout/>
        <div className="container mx-auto w-1/3 shadow-xl rounded-box px-7">
            <div className="btn btn-primary w-full">Edit Artikel</div>
                <form onSubmit={updateArticle}>
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
                    <textarea className="textarea textarea-bordered w-full h-96" placeholder="Bio" value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
                        <button type='submit' className="btn btn-primary">Submit</button>
                </form>
        </div>
    </div>
  )
}

export default EditArticle