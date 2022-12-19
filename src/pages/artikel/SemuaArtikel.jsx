import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Layout from '../Layout'
import { Link } from 'react-router-dom';

const SemuaArtikel = () => {
    const [articles,setArticles] = useState([]);
    const [category,setCategory] = useState([]);
    const [selectedTag,setSelectedTag] = useState("");


    const getArticle = async() => {
        const response = await axios.get('http://localhost:5000/article');
        setArticles(response.data.data);
    }

    const getCategory = async() => {
        const response = await axios.get('http://localhost:5000/articleCategory');
        setCategory(response.data.data);
    }
    useEffect(()=>{
        getArticle();
        getCategory();
    },[])
    console.log(selectedTag)
  return (
    <div>
        <Layout/>
        <div className="container mx-auto mt-10 flex">
            {/* <div>
                <div className="btn btn-primary w-full">tags</div>
                <div className="p-7 shadow-xl rounded-box">
                    {category.map((a,i)=>(
                        <button className="btn btn-ghost" value={selectedTag} onClick={(e)=>setSelectedTag(e.target.value)}>#{a.name}</button>
                    ))}
                </div>
            </div> */}
            <div>
                {/* <div>
                    <div className="btn btn-primary w-full mx-2 mb-5">All Articles</div>
                </div> */}
                <div className="sm:flex flex-wrap justify-center">
                {
                    articles.map((a,i)=>(
                        <Link to={`/artikel/${a.uuid}`}>
                        <div className="mx-2 my-2 card w-80 bg-base-100 shadow-xl h-80 transition ease-in-out delay-150 bg-base-100  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300">
                        <figure><img src={a.image} alt="Shoes" className="h-56"/></figure>
                        <div className="flex card-body">
                            <h2 className="card-title">
                            {a.title}
                            </h2>
                            <p>{a.caption}</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">{a.articleCategory.name}</div> 
                            </div>
                        </div>
                        </div>
                    </Link>
                    ))
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default SemuaArtikel