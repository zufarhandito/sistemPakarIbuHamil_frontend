import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Skrining from './pages/Beranda';
import Login from './components/Login';
import User from './pages/User/User';
import Penyakit from './pages/Penyakit/Penyakit';
import Aturan from './pages/Aturan';
import Gejala from './pages/Gejala';
import Register from './components/Register';
import SkriningPage from './pages/skrining/SkriningPage';
import EditPenyakit from './pages/Penyakit/EditPenyakit';
import EditUser from './pages/User/EditUser';
import EditGejala from './pages/EditGejala';
import FormTambahAturan from './pages/aturan/FormTambahAturan';
import DetailsAturan from './pages/aturan/DetailsAturan';
import Profile from './pages/Profile';
import Bantuan from './pages/Bantuan';
import Feedback from './pages/Feedback';
import Article from './pages/artikel/Article';
import EditArticle from './pages/artikel/EditArticle';
import Category from './pages/artikel/Category';
import EditCategory from './pages/artikel/EditCategory';
import SemuaArtikel from './pages/artikel/SemuaArtikel';
import DetailArtikel from './pages/artikel/DetailArtikel';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Skrining/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/bantuan" element={<Bantuan/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/penyakits" element={<Penyakit/>}/>
          <Route path="/artikel" element={<Article/>}/>
          <Route path="/articles" element={<SemuaArtikel/>}/>
          <Route path="/artikel/edit/:id" element={<EditArticle/>}/>
          <Route path="/artikel/:id" element={<DetailArtikel/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/edit/:id" element={<EditCategory/>}/>
          
          <Route path="/gejalas" element={<Gejala/>}/>
          <Route path="/aturans" element={<Aturan/>}/>
          <Route path="/aturans/tambah" element={<FormTambahAturan/>}/>
          <Route path="/aturans/edit/:id" element={<DetailsAturan/>}/>
          <Route path="/skrinings" element={<SkriningPage/>}/>
          <Route path="/penyakits/edit/:id" element={<EditPenyakit/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/gejalas/edit/:id" element={<EditGejala/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
