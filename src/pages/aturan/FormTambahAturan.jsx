import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import axios from 'axios';
import SelectSearch from 'react-select-search';


const FormTambahAturan = () => {
    const [inputs, setInputs] = useState([
        {
            gejalaId:'',
            MB:0,
            MD:0
        }
    ])
    const [penyakit,setPenyakit] = useState([]);
    const [gejala,setGejala] = useState([]);
    const [penyakitId, setPenyakitId] = useState("")
    const navigate = useNavigate();
    const [message,setMessage] = useState("");
    const [requiredPenyakit, setRequiredPenyakit] = useState("");
    const [requiredGejala, setRequiredGejala] = useState("");

    const getPenyakit = async()=>{
        const response = await axios.get("http://localhost:5000/penyakit");
        setPenyakit(response.data.data)
    }

    const getGejala = async() => {
        const response = await axios.get("http://localhost:5000/gejala");
        setGejala(response.data.data);
    }

    const addGejalaField = () => {
        setInputs([...inputs,{
            gejalaId:'',
            MB:0,
            MD:0
        }])
    }

    const changeGejala = (e,i) => {
        const value = e.target.value
        const state = [...inputs];
        state[i].gejalaId = value;
        setInputs(state)
    }

    const changeMB = (e,i) => {
        const value = e.target.value
        const state = [...inputs];
        state[i].MB = value;
        setInputs(state)
    }
    
    const changeMD = (e,i) => {
        const value = e.target.value
        const state = [...inputs];
        state[i].MD = value;
        setInputs(state)
    }
    
    const deleteGejalaField = (e,i) => {
        const state = [...inputs];
        state.splice(i,1);
        setInputs(state)
    }

    useEffect(()=>{
        getPenyakit();
        getGejala();
    },[])

    const saveAturan = async(e) => {
        e.preventDefault();

        if(penyakitId === "" || penyakitId === null){
            setRequiredPenyakit("Penyakit tidak boleh kosong")
        }

        let data = []
        for(let i in inputs){
            if(inputs[i].gejalaId === "" || inputs[0].gejalaId === null){
                setRequiredGejala("Ada gejala yang kosong!")
            }
            data.push({penyakitId,...inputs[i]})
        }
        
        console.log(data)
        try {
            await axios.post('http://localhost:5000/aturan',{
                arr: data
            });
            navigate("/aturans");
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    console.log(inputs)
  return (
    <div>
        <Layout/>
        <div className="container mx-auto lg:w-3/5 mt-7 shadow-lg p-8 rounded-box">
            <form onSubmit={saveAturan} method="post">
                <div className="mb-7">
                    {
                        requiredPenyakit && 
                        <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{requiredPenyakit}</span>
                        </div>
                        </div>
                    }
                    {
                        requiredGejala && 
                        <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{requiredGejala}</span>
                        </div>
                        </div>
                    }
                    <label className="label">
                        <span className="label-text">Nama Penyakit</span>
                    </label>
                    <select className="select select-bordered w-full" onChange={(e)=>setPenyakitId(e.target.value)} required>
                        <option disabled selected>Pilih Nama Penyakit</option>
                        {penyakit.map((a,b)=>(
                            <option key={a.id} value={a.id}>{a.name}</option>
                        ))}
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="table lg:w-full md:w-5/6 mb-5">
                        <thead>
                            <tr>
                                <td>Nama Gejala</td>
                                <td className="text-center">
                                    <div className="font-bold">Nilai MB</div>
                                    <div className="font-normal normal-case">(Measurement of Belief)</div>
                                </td>
                                <td className="text-center">
                                    <div className="font-bold">Nilai MD</div>
                                    <div className="font-normal normal-case">(Measurement of Disbelief)</div>
                                </td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {inputs.map((a,i)=>{
                                return (
                                    <tr>
                                    <td>
                                        <select className="select select-bordered w-fit"  onChange={(e)=>{
                                                changeGejala(e,i)
                                                }} required>
                                            <option className="w-fit" disabled selected>Pilih Gejala</option>
                                            {gejala.map((arr,ind)=>{
                                                return (<option key={ind} value={arr.id}>{arr.name}</option>)
                                            })}
                                        </select>
                                    </td>
                                    <td>
                                        <div className="grid grid-cols-2 place-items-center">
                                        <input name="MB" type="range" min="0" max="1" step="0.01" 
                                            value={inputs[i].MB}
                                            onChange={(e)=>{
                                                changeMB(e,i)
                                                }} 
                                            className="block range range-xs range-primary " />
                                        <input type="text" name="MB" value={inputs[i].MB}                                         
                                            onChange={(e)=>{
                                                changeMB(e,i)
                                                }}
                                            className="input input-bordered inputs-sm w-12 p-0 text-center"  />
                                        </div>
                                    </td>
                                    <td>
                                    <div className="grid grid-cols-2 place-items-center">
                                        <input name="MD" type="range" min="0" max="1" step="0.01" 
                                            value={inputs[i].MD}
                                            onChange={(e)=>{
                                                changeMD(e,i)
                                                }} 
                                            className="range range-xs range-primary" />
                                        <input type="text" name="MD" value={inputs[i].MD}                                         
                                            onChange={(e)=>{
                                                changeMD(e,i)
                                                }}
                                            className="input input-bordered inputs-sm w-12 p-0 text-center"  />
                                        </div>
                                    </td>
                                    <td>
                                        {i === 0 ? 
                                        (<div className="btn btn-accent shadow-lg mx-auto w-full" onClick={addGejalaField}>+</div>)
                                        :
                                        (<div className="btn btn-error shadow-lg mx-auto w-full" onClick={e => deleteGejalaField(e,i)}>-</div>)
                                        }
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody> 
                    </table>
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FormTambahAturan