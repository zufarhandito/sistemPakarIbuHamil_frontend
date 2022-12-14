import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout'
import axios from 'axios';
import { getMe } from '../../features/authSlice';
import { PDFDownloadLink, Document, Page, Text, Image, View, PDFViewer, StyleSheet } from '@react-pdf/renderer';

const SkriningPage = () => {
  const {isError,user} = useSelector((state=> state.auth));
  const dispatch = useDispatch();
  const [userr,setUserr] = useState([]);
  const [gejalaa,setGejalaa] = useState([]);
  const [gejalaInfo, setGejalaInfo] = useState([]);
  const [ arrGejala, setArrGejala] = useState([]);
  const input = [];
  const [message,setMessage] = useState("");
  const navigate = useNavigate()
  const [tanggal,setTanggal] = useState("")
  console.log(gejalaInfo)

  const datee = new Date();

  const styles = StyleSheet.create({
    page:{
      fontSize:12
    },
    title: {
      marginHorizontal: 'auto',
      marginTop: 30,
      fontSize: 25
    },
    subtitle: {
      marginHorizontal: 'auto',
      marginBottom: 18
    },
    headerImage: {
      marginTop: 10,
      marginHorizontal: 'auto',
      width: 400,
      height: 'auto'
    },
    container: {
      marginLeft:15
    },
    bio: {
      marginLeft:10
    },
    bioTitle: {
      border: 1,
      padding:5,
      fontWeight: 'bold',
      marginVertical:10
    },
    bioSubtitle:{
      marginTop:5,
      fontSize: 10
    }
  });

  const MyDoc = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* <Image style={styles.headerImage} src="header.jpg"></Image> */}
      <Text style={styles.title}>Hasil Screening Ibu Hamil</Text>
      <Text style={styles.subtitle}>Tanggal : {datee.toLocaleDateString()}</Text>
      <View style={styles.container}>
        <View>
          <Text style={styles.bioTitle}>
            Data Diri
          </Text>
            <View style={styles.bio}>
              <Text style={styles.bioSubtitle}>Nama Depan</Text>
              <Text>= {user.firstName}</Text>
              <Text style={styles.bioSubtitle}>Nama Belakang</Text>
              <Text>= {user.lastName}</Text>
              <Text style={styles.bioSubtitle}>Nama Lengkap</Text>
              <Text>= {user.fullName}</Text>
              <Text style={styles.bioSubtitle}>Email</Text>
              <Text>= {user.email}</Text>
              <Text style={styles.bioSubtitle}>Jenis Kelamin</Text>
              <Text>= {user.Gender}</Text>
              <Text style={styles.bioSubtitle}>RT / RW</Text>
              <Text>= {user.RT} / {user.RW}</Text>
              <Text style={styles.bioSubtitle}>Alamat</Text>
              <Text>= {user.Kalurahan}, {user.Kapanewon}, {user.Kabupaten}, {user.Provinsi}</Text>
            </View>
        </View>
        <Text style={styles.bioTitle}>
           Keluhan / Gejala Yang Dialami
        </Text>
        <Text >{gejalaInfo.map(a=>(
          <View>
            <Text>{a.first}</Text>
            <Text>, </Text>
          </View>
        ))}</Text>
        <Text style={styles.bioTitle}>
          Hasil Screening
        </Text>
        <Text>
          {arrGejala[0]?.cfPercentage.toFixed(2)}% -- {arrGejala[0]?.NamaPenyakit}
        </Text>
        <Text>
          {arrGejala[1]?.cfPercentage.toFixed(2)}% -- {arrGejala[1]?.NamaPenyakit}
        </Text>
        <Text>
          {arrGejala[2]?.cfPercentage.toFixed(2)}% -- {arrGejala[2]?.NamaPenyakit}
        </Text>
        <Text>
          {arrGejala[3]?.cfPercentage.toFixed(2)}% -- {arrGejala[3]?.NamaPenyakit}
        </Text>
        <Text>
          {arrGejala[4]?.cfPercentage.toFixed(2)}% -- {arrGejala[4]?.NamaPenyakit}
        </Text>
      </View>
    </Page>
  </Document>
  )

  useEffect(()=>{
    dispatch(getMe());
  },[dispatch]);

  useEffect(()=>{
      data();
      getUser()
      postGejala();
  },[gejalaInfo]);

  const getUser = async() => {
    const response = await axios.get('http://localhost:5000/users');
    setUserr(response.data.data.filter(a=>a.uuid === user.uuid))
  }

  const data = async() => {
      const response = await axios.get('http://localhost:5000/diagnosis/gejalas');
      setGejalaa(response.data.data)
  }

  for(let i in gejalaInfo){
    input.push(gejalaInfo[i].id)
    }

  // console.log(userr)

  const postGejala = async() => {
    // e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/diagnosis',{
        data : input
      });
      setArrGejala(response.data.data);
    } catch (error) {
      if(error.response){
        setMessage(error.response.data.message);
    }
    }
  }
  const firstName = arrGejala[0]?.NamaPenyakit;
  const firstKeterangan = arrGejala[0]?.Keterangan;
  const firstSolusi = arrGejala[0]?.Solusi;
  const link = `https://www.google.com/search?q=${firstName}`

  // console.log(gejalaInfo)
  return (
    <div>
      <Layout/>
      <div className="container mx-auto h-screen sm:flex">
        <div className="flex flex-col w-fit p-5 md:h-full shadow-lg rounded-box ">
            <div className="btn btn-primary w-full mb-8">Masukkan gejala / gangguan yang dialami</div>
          <div className="overflow-y-auto">
            <div className=" w-full shadow-lg ">
              <table className="table mx-auto">
                <thead>
                  <tr>
                    <td>No</td>
                    <td>Nama Gejala</td>
                    <td>Pilih</td>
                  </tr>
                </thead>
                <tbody>
                {gejalaa.map((item,i) => {
                    return (
                      <tr>
                        <td>{i +1}</td>
                        <td>
                          <div key={item.id} className="form-control">
                              <span>{item.name}</span> 
                          </div>
                        </td>
                        <td>
                        <input
                              onChange={(e) => {
                                  // add to list
                                  if (e.target.checked) {
                                  setGejalaInfo([
                                      ...gejalaInfo,
                                      {
                                      id: item.id,
                                      first: item.name,
                                      },
                                  ]);
                                  } else {
                                  // remove from list
                                  setGejalaInfo(
                                      gejalaInfo.filter((people) => people.id !== item.id),
                                  );
                                  
                                  }
                              }}
                              value={gejalaInfo}
                              type="checkbox"
                              className="checkbox checkbox-primary"
                              />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="md:flex flex-col md:w-full p-5 h-full ">
        <div className="btn btn-primary w-full mb-8">Hasil dan informasi gangguan</div>
          <div className="block md:w-full shadow-xl  p-7 rounded-box">
            <div className="overflow-y-auto h-fit">
              <table className="table w-full overflow-y-auto">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Gangguan</th>
                    <th>Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {arrGejala.map((a,i)=>(
                  <tr key={a.penyakitId}>
                    <td>{i +1}</td>
                    <td>
                      <div className="font-bold">
                        {a.NamaPenyakit}
                      </div>
                      <div>
                        <progress className="progress progress-primary w-56" value={a.cfPercentage} max="100"></progress>
                      </div>
                    </td>
                    <td>{a.cfPercentage.toFixed(2)} %</td>
                  </tr>
                  )).slice(0,3)}
                </tbody>
              </table>
            </div>
            </div>
          <div className="rounded-box mt-5 h-1/2">
          <div className="card w-full bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{firstName}</h2>
              <p>{firstKeterangan}</p>
              <div className="divider"></div>
              <h2 className="card-title"></h2>
              <p>{firstSolusi}</p>
              <div className="card-actions justify-end">
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn">Pelajari lebih lanjut</a>
              </div>
            </div>
          </div>
            <div className="flex w-full justify-end mt-5">
              <label htmlFor="my-modal" className="btn btn-primary ">Details dan Unduh</label>
            </div>
          </div>
          <div className="flex mt-5 justify-end">
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  {user ?                   
                    <div className="modal-box max-w-none max-h-screen w-3/4">
                      <div className="container overflow-y-auto mx-auto p-6">
                          {/* <img src="header.jpg" alt="puskesmas_ngemplak1_header" className="mx-auto h-auto lg:w-3/4" /> */}
                          <h3 className="font-bold text-lg text-center text-2xl mt-10">Laporan Hasil <span className="italic">Screening</span> Ibu Hamil</h3>
                          <p className="text-center">Hasil <span className="italic">Screening</span> Ibu {user.firstName}</p>
                          <p className="text-center mb-7">Tanggal {datee.toLocaleDateString()}</p>
                          <div className="sm:flex lg:flex-row">
                            <div className="lg:w-1/2 ">
                              <div className="btn btn-outline no-animation w-full ">Data Diri</div>
                              <table className="w-full my-5">
                                <tbody>
                                  <tr>
                                    <td>Nama Depan</td>
                                    <td>: {user.firstName}</td>
                                  </tr>
                                  <tr>
                                    <td>Nama Belakang</td>
                                    <td>: {user.lastName}</td>
                                  </tr>
                                  <tr>
                                    <td>Nama Lengkap</td>
                                    <td>: {user.fullName}</td>
                                  </tr>
                                  <tr>
                                    <td>Email</td>
                                    <td>: {user.email}</td>
                                  </tr>
                                  <tr>
                                    <td>Jenis Kelamin</td>
                                    <td>: {user.Gender}</td>
                                  </tr>
                                  <tr>
                                    <td>NIK</td>
                                    <td>: {user.NIK}</td>
                                  </tr>
                                  <tr>
                                    <td>RT / RW</td>
                                    <td>: {user.RT} / {user.RW}</td>
                                  </tr>
                                  <tr>
                                    <td>Kalurahan</td>
                                    <td>: {user.Kalurahan}</td>
                                  </tr>
                                  <tr>
                                    <td>Kapanewon</td>
                                    <td>: {user.Kapanewon}</td>
                                  </tr>
                                  <tr>
                                    <td>Kabupaten</td>
                                    <td>: {user.Kabupaten}</td>
                                  </tr>
                                  <tr>
                                    <td>Provinsi</td>
                                    <td>: {user.Provinsi}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="btn btn-outline no-animation w-full ">Gejala yang dialami</div>
                              <ul className="my-5">
                                {gejalaInfo.map(a=>(
                                  <li className="list-disc ml-5">{a.first}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="lg:w-1/2">
                              <div className="btn btn-outline no-animation w-full ">Hasil <span className="italic ml-1.5">Screening</span></div>
                              <table className="table w-full overflow-y-auto mt-5">
                                <thead>
                                    <tr>
                                      <th>No</th>
                                      <th>Gangguan</th>
                                      <th>Persentase</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {arrGejala.map((a,i)=>(
                                    <tr key={a.penyakitId}>
                                      <td>{i +1}</td>
                                      <td>
                                        <div className="font-bold">{a.NamaPenyakit}</div>
                                        <div><progress className="progress progress-primary w-56" value={a.cfPercentage} max="100"></progress></div>
                                      </td>
                                      <td>{a.cfPercentage.toFixed(2)} %</td>
                                    </tr>
                                    )).slice(0,5)}
                                  </tbody>
                                </table>
                            </div>
                          </div>
                          <div className="btn btn-outline no-animation w-full my-7">Informasi penyakit / gangguan yang dialami</div>
                          <div className="text-lg font-bold">
                            Nama Penyakit / Gangguan
                          </div>
                          <div className="ml-5">
                            {firstName}
                          </div>
                          <div className="text-lg font-bold">
                            Keterangan
                          </div>
                          <div className="ml-5">
                            {firstKeterangan}
                          </div>
                          <div className="text-lg font-bold">
                            Solusi
                          </div>
                          <div className="ml-5">
                            {firstSolusi}
                          </div>
                          <div className="text-sm text-red-500 mt-7">
                            *Nama penyakit yang tertulis merupakan penyakit dengan kemungkinan terbesar
                          </div>
                          <div className="modal-action">
                            <label htmlFor="my-modal" className="btn btn-primary">kembali</label>
                          <PDFDownloadLink document={<MyDoc/>} fileName="hasilScreening" className="btn btn-outline">
                            {({loading})=>(loading ? <button>Loading document...</button> : <button>Unduh PDF</button>)}
                          </PDFDownloadLink>
                          </div>
                      </div>
                    </div> : 
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Anda harus login</h3>
                      <p className="py-4">Mohon login terlebih dahulu untuk melanjutkan</p>
                      <div className="modal-action">
                        <label htmlFor="my-modal"className="btn btn-ghost">Batal</label>
                        <div className="btn btn-primary" onClick={()=>navigate("/login")}>Login</div>
                      </div>
                    </div>
                    }
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkriningPage