import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Layout from '../Layout'

const DetailArtikel = () => {
    const {id} = useParams();
    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [caption,setCaption] = useState("");
    const [date,setDate] = useState("")
    const [message,setMessage] = useState("");

    useEffect(()=>{
        const getArticleById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/article/${id}`);
            setTitle(response.data.data.title);
            setDate(response.data.data.createdAt);
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
  return (
    <div>
        <Layout/>
        <div className="container mx-auto shadow-xl rounded-box mt-10 p-10">
            <div className="justify-center w-full flex">
                <img src={image} alt="" className="h-96 w-auto"/>
            </div>
            <div className="font-bold text-3xl text-center my-10">
                {title}
            </div>
            <div>
                <div className="text-sm mb-5">
                    dibuat tanggal : <span className="font-bold text-primary"> {date.slice(0,10)} </span>
                </div>
                <div className="font-bold mb-4">
                    {caption}
                </div>
                {content}
            </div>
        </div>
    </div>
  )
}

export default DetailArtikel