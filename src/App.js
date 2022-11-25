import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Skrining from './pages/Beranda';
import Login from './components/Login';
import User from './pages/User';
import Penyakit from './pages/Penyakit/Penyakit';
import Rekam from './pages/Rekam';
import Aturan from './pages/Aturan';
import Gejala from './pages/Gejala';
import Pasien from './pages/Pasien';
import Register from './components/Register';
import SkriningPage from './pages/skrining/SkriningPage';
import EditPenyakit from './pages/Penyakit/EditPenyakit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Skrining/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/penyakits" element={<Penyakit/>}/>
          <Route path="/rekams" element={<Rekam/>}/>
          <Route path="/gejalas" element={<Gejala/>}/>
          <Route path="/aturans" element={<Aturan/>}/>
          <Route path="/pasiens" element={<Pasien/>}/>
          <Route path="/skrinings" element={<SkriningPage/>}/>
          <Route path="/penyakits/edit/:id" element={<EditPenyakit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
