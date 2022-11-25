import React from 'react'
import Layout from '../Layout'
import Skrining from '../../components/skrining/Skrining';
import HasilSkrining from '../../components/skrining/HasilSkrining';
import HasilSkrining2 from '../../components/skrining/HasilSkrining2';
import InfoPenyakit from '../../components/skrining/InfoPenyakit';

const SkriningPage = () => {
  return (
    <div>
      <Layout/>
      <div className="container mx-auto h-screen sm:flex">
        <div className="flex md:w-1/2 p-5 lg:h-5/6">
          <Skrining/>
        </div>

        <div className="md:flex flex-col md:w-1/2 p-5 h-96">
          <div className="md:flex flex-row">
            <div className="flex md:w-1/2 mr-5">
            <HasilSkrining/>
            </div>
            <div className="flex md:w-1/2">
            <HasilSkrining2/>
            </div>
          </div>
          <div>
            <div className="rounded-box mt-5">
              <InfoPenyakit/>
            </div>
          </div>
          <div className="flex mt-5 justify-end">
            <button className="btn btn-wide btn-primary">Simpan</button>
            <button className="btn btn-ghost text-primary">Cetak</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkriningPage