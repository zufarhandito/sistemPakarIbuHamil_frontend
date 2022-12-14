import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles,setArticles] = useState([]);
    const getArticle = async() => {
        const response = await axios.get('http://localhost:5000/article');
        setArticles(response.data.data);
    }

    useEffect(()=>{
        getArticle();
    },[])


  return (
<div>
    <div className="sm:flex">
        {
            articles.map((a,i)=>(
                <Link to={`/artikel/${a.uuid}`}>
                <div className="mx-2 card w-80 shadow-xl h-96 transition ease-in-out delay-150 bg-base-100  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300">
                    <figure><img src={a.image} alt="Shoes" className="h-56 w-auto"/></figure>
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
            )).slice(0,4)
        }
    </div>
    <div className="flex justify-end">
        <Link to="/articles" className="font-semibold btn-sm btn btn-primary btn-outline shadow-xl hover:shadow-2xl mt-8">Lihat Selengkapnya</Link>
    </div>
</div>
  )
}

export default Articles