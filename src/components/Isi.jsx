import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chat from './Chat';

const Isi = () => {
    const {user} = useSelector((state) => state.auth);
  return (
    <div className="container mx-auto py-10">
        <div className="hero lg:h-96 bg-base-200 rounded-box">
        <div className="hero-content  flex-col lg:flex-row-reverse">
            <img src="https://www.astronauts.id/blog/wp-content/uploads/2022/07/Tips-Sehat-Ibu-Hamil-Muda-Agar-Janin-Tidak-Keguguran-1024x683.jpg" className="rounded-lg shadow-2xl lg:h-80" />
            <div>
            <h1 className="text-5xl font-bold">Puskesmas Ngemplak 1</h1>
            <p className="py-6">Sistem Deteksi Dini Masalah Kesehatan pada Ibu Hamil, sebagai aplikasi pemeriksaan ibu hamil secara online dan mandiri dari rumah!</p>
            <NavLink to="/skrinings" className="btn btn-primary">Mulai <span className="italic ml-1.5">Screening</span></NavLink>
            </div>
        </div>
        </div>
        <div className="flex flex-col w-full">
            {/* <div className="divider"></div>  */}
            <div className="sm:flex my-3">
                <div className="lg:w-3/4 bg-base-300 rounded-box ">
                    <div className="w-full my-10 h-full">
                            <div className="ml-16">
                            <p className="font-bold mb-5">Petunjuk Penggunaan</p>
                            <ul className="list-disc ml-5">
                                <li className="mb-2">Untuk memulai <span className="italic">screening</span> kesehatan ibu hamil,tekan <span className="font-bold text-primary"> Mulai Screening</span> di atas</li>
                                <li className="mb-2">Mulai dengan memilih gejala yang anda alami dibagian kiri layar</li>
                                <li className="mb-2">Hasil <span className="italic">screening</span> anda akan terlihat di bagian kanan layar</li>
                                <li className="mb-2">Informasi mengenai penyakit / gangguan dengan persentase terbesar dapat dilihat di layar kanan bawah</li>
                                <li className="mb-2">Untuk menyimpan dan melihat detail informasi <span className="italic">screening,</span> anda harus <span className="italic">Log-In</span> dipojok kanan bawah </li>
                                <ul className="list-disc ml-5">
                                    <li className="mb-2">Menyimpan informasi <span>screening</span> dapat berguna untuk mempermudah kunjungan ke Puskesmas Ngemplak 1</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="lg:w-1/4">
                <Chat/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Isi