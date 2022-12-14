import React from 'react'
import Layout from './Layout'

const Bantuan = () => {
  return (
    <div>
        <Layout/>
        <div className="container w-fit p-10 mx-auto my-10 h-full rounded-box shadow-lg">
        <div className="btn btn-primary w-full">Petunjuk Penggunaan</div>
            <div className="">
                <p className="font-bold my-5">Umum</p>
                <ul className="list-disc ml-5">
                    <li className="mb-2">Untuk memulai <span className="italic">screening</span> kesehatan ibu hamil,tekan <span className="font-bold text-primary"> Mulai Screening</span> di halaman utama</li>
                    <li className="mb-2">Mulai dengan memilih gejala yang anda alami dibagian kiri layar</li>
                    <li className="mb-2">Hasil <span className="italic">screening</span> anda akan terlihat di bagian kanan layar</li>
                    <li className="mb-2">Informasi mengenai penyakit / gangguan dengan persentase terbesar dapat dilihat di layar kanan bawah</li>
                    <li className="mb-2">Untuk mengunduh dan melihat detail informasi <span className="italic">screening,</span> anda harus <span className="italic">Log-In</span> dipojok kanan bawah </li>
                    <ul className="list-disc ml-5">
                        <li className="mb-2">mengunduh informasi <span>screening</span> dapat berguna untuk mempermudah kunjungan ke Fasilitas Kesehatan </li>
                    </ul>
                </ul>
            </div>
            <div className="">
                <div className="font-bold my-5">FAQ</div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                        <div className="collapse-title font-normal">
                            Apakah hasil di sistem ini valid?
                        </div>
                        <div className="collapse-content text-sm ml-5"> 
                            <p tabIndex={0}>Sistem kami menggunakan pengetahuan pakar / dokter kandungan untuk memproses keluhan anda</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                        <div className="collapse-title font-normal">
                            Bagaimana jika gejala yang saya alami tidak terdaftar?
                        </div>
                        <div className="collapse-content text-sm ml-5"> 
                            <p tabIndex={0}>Anda bisa meengirimkan saran di halaman Feedback</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                        <div className="collapse-title font-normal">
                            Mengapa saya harus Login untuk melihat detail hasil screening?
                        </div>
                        <div className="collapse-content text-sm ml-5"> 
                            <p tabIndex={0}>Kami membutuhkan data ibu untuk ditampilkan di sistem kami</p>
                            <p tabIndex={0}>hasil dapat diunduh beserta data diri anda</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                        <div className="collapse-title font-normal">
                            Apa yang harus saya lakukan setelah melakukan screening di aplikasi ini?
                        </div>
                        <div className="collapse-content text-sm ml-5"> 
                            <p tabIndex={0}>Kami menyertakan solusi dan tindakan lebih lanjut di hasil screening</p>
                            <p tabIndex={0}>Anda dapat mengikuti keterangan hasil yang anda dapatkan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Bantuan