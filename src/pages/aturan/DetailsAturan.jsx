import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Layout from '../Layout';

const DetailsAturan = () => {
    const {id} = useParams();
    const [penyakit,setPenyakit] = useState("");
    const [penyakitId, setPenyakitId] = useState("")
    const [gejala,setGejala] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    const getGejala = async() => {
        const response = await axios.get("http://localhost:5000/gejala");
        setGejala(response.data.data);
    }

    useEffect(()=>{
        getGejala();
        const getGejalaById = async()=>{
          try {
            const response = await axios.get(`http://localhost:5000/aturan/${id}`);
            let responseData = response.data.data;
            let penyakitId = responseData[0]?.id;
            let penyakitName = responseData[0]?.name;
            let gejalas = responseData[0]?.gejalas;
            const mergedResponse = []
            for(let j in gejalas){
                mergedResponse.push({
                    uuid: gejalas[j].aturans.uuid,
                    penyakitId: penyakitId,
                    gejalaId: gejalas[j].id,
                    // gejalaName: gejalas[j].name,
                    MB: gejalas[j].aturans.MB,
                    MD: gejalas[j].aturans.MD
                })
            }
            setPenyakit(penyakitName);
            setPenyakitId(penyakitId);
            setInputs(mergedResponse);
            // console.log(penyakitId);

          } catch (error) {
            if(error.response){
              setMessage(error.response.data.message);
          }
          }
        }
        getGejalaById();
      },[id])

    const saveAturan = async(e) => {
        e.preventDefault();

        for(let i in inputs){
            delete inputs[i].uuid
        }

        try {
            await axios.post(`http://localhost:5000/aturan/edit/${penyakitId}`,{
                arr: inputs
            });
            navigate("/aturans");
        } catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    const deleteGejala = async() => {
        await axios.delete(`http://localhost:5000/aturan/${penyakitId}`);
    }

    const changeGejala = (e,i) => {
        const value = e.target.value
        const state = [...inputs];
        state[i].gejalaId = value;
        state[i].uuid = value;
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

    const addGejalaField = () => {
        setInputs([...inputs,{
            uuid:'',
            penyakitId:penyakitId,
            gejalaId:'',
            MB:0,
            MD:0
        }])
    }

    const deleteGejalaField = (e,i) => {
        const state = [...inputs];
        state.splice(i,1);
        setInputs(state)
    }
      
    console.log(inputs)
  return (
    <div>
        <Layout/>
        <div className="container mx-auto lg:w-3/5 mt-7 shadow-lg p-8 rounded-box">
            <form onSubmit={saveAturan} method="post">
                <div className="mb-7">
                    <div className="alert alert-info shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Apabila gejala hanya satu dan ingin dihapus, silahkan kosongkan nilainya</span>
                    </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Nama Penyakit</span>
                    </label>
                    <select className="select select-bordered w-full" disabled >
                        <option disabled selected>{penyakit}</option>
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
                                        <select className="select select-bordered w-fit" 
                                            onChange={(e)=>{
                                                changeGejala(e,i)
                                                }}>
                                            <option className="w-fit" disabled selected>Pilih Gejala</option>
                                            {gejala.map((arr,ind)=>{
                                                return (<option key={ind} value={arr.id} selected={a.gejalaId === arr.id}>{arr.name}</option>)
                                            })}
                                        </select>
                                    </td>
                                    <td>
                                        <div className="grid grid-cols-2 place-items-center ">
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

export default DetailsAturan;