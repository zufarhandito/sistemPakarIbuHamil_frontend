import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chat from './Chat';

const Isi = () => {
    const {user} = useSelector((state) => state.auth);
  return (
    <div className="container mx-auto py-10">
        <div className="flex flex-col w-full">
            <div className="sm:flex h-20 my-3 bg-base-300 rounded-box">
                <div className="flex-auto my-auto ml-5 font-semibold">Selamat datang, {user && user.firstName}!</div>
                <NavLink to="/skrinings" className="w-10/12 mx-auto my-auto lg:w-1/4 btn btn-wide btn-primary mr-5">Mulai Skrining</NavLink>
            </div> 
            {/* <div className="divider"></div>  */}
            <div className="sm:flex">
                <div className="lg:w-3/4 my-3 ">
                <div className="card w-full bg-base-100 image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pelayanan Ibu Hamil</h2>
                        <p>Puskesmas Ngemplak 1</p>
                    </div>
                </div>
                <div className="stats my-5 shadow-md w-full">
                    <div className="stat place-items-center">
                        <div className="stat-title">Pasien</div>
                        <div className="stat-value">104</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Bidan</div>
                        <div className="stat-value text-secondary">12</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Dokter</div>
                        <div className="stat-value">8</div>
                    </div>
                </div>
                <div className="card w-full bg-base-300 rounded-box">
                        <div className="card-body">
                        <p>Petunjuk Penggunaan</p>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">Untuk memulai diagnosis gangguan kesehatan pada ibu hamil,tekan Mulai Diagnosis di pojok kanan atas</li>
                            <li className="mb-2">Apabila gejala tidak terdaftar, anda dapat menambahkannya di tab Gejala</li>
                            <li className="mb-2">Anda juga dapat menambahkan jenis penyakit baru di tab Panyakit</li>
                            <li className="mb-2">Masukkan berbagai gejala yang dialami oleh ibu hamil beserta nilai / tingkatan keyakinan setiap gejala</li>
                                <ul className="list-disc ml-5">
                                    <li className="mb-2">Gejala dan Penyakit terhubung melalui aturan-aturan yang telah ditetapkan</li>
                                    <li className="mb-2">Untuk menambahkan aturan, masuk ke tab Aturan</li>
                                </ul>
                            <li className="mb-2">Selanjutnya tekan Mulai untuk mendiagnosis gangguan kesehatan</li>
                            <li className="mb-2">Hasil prediksi penyakit akan ditampilkan beserta keterangan dan solusi penyakit </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="lg:w-1/4 my-3 h-fit card bg-base-300 rounded-box place-items-center">
                    <Chat/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Isi