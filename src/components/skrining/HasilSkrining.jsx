import React from 'react'

const HasilSkrining = () => {
  return (
    <div className="bg-base-300 rounded-box w-full p-5 h-full bg-gradient-to-r from-indigo-600 to-purple-800">
        <p className="px-9 py-6 text-center">Berdasarkan gejala / keluhan yang dialami ibu, maka kemungkinan penyakit yang dialami adalah</p>
        <h1 className="text-7xl text-center font-sans"> <span className="font-bold">80</span><span className="text-2xl">%</span> </h1>
        <p className="font-medium text-center mr-5">Abortus</p>
        <p className="px-9 py-6 text-center">keterangan lebih lanjut tentang penyakit tersebut tertulis dibawah</p>
    </div>
  )
}

export default HasilSkrining