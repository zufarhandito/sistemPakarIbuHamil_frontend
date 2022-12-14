import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chat from './Chat';
import Articles from './Articles';

const Isi = () => {
    const {user} = useSelector((state) => state.auth);
  return (
    <div className="container mx-auto py-10">
        <div className="hero lg:h-96 bg-base-200 rounded-box">
        <div className="hero-content  flex-col lg:flex-row-reverse">
            <img src="https://www.astronauts.id/blog/wp-content/uploads/2022/07/Tips-Sehat-Ibu-Hamil-Muda-Agar-Janin-Tidak-Keguguran-1024x683.jpg" className="rounded-lg shadow-2xl lg:h-80" />
            <div>
            <h1 className="text-5xl font-bold">Si_kamil</h1>
            <p className="py-6">Sistem Pakar Deteksi Dini Masalah Kesehatan pada Ibu Hamil, sebagai aplikasi pemeriksaan ibu hamil secara online dan mandiri dari rumah!</p>
            <NavLink to="/skrinings" className="btn btn-primary">Mulai <span className="italic ml-1.5">Screening</span></NavLink>
            </div>
        </div>
        </div>
        <div className=" text-center w-[800px] mx-auto my-20">
            <p className="font-bold text-xl">Tentang Aplikasi</p>
            <p>Aplikasi ini dibangun untuk membantu ibu hamil dalam melakukan <span>screening</span> mandiri. Hasil aplikasi ini diperoleh berdasarkan aturan-aturan yang telah disepakati dokter spesialis kandungan</p>
        </div>
        <div className=" text-center w-[800px] mx-auto mt-20 mb-10">
            <p className="font-bold text-xl">Artikel Kesehatan</p>
        </div>
        <div className="flex justify-center">
            <Articles/>
        </div>
    </div>
  )
}

export default Isi