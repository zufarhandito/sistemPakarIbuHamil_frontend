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
import AddPenyakit from './pages/Penyakit/AddPenyakit';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Skrining/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/penyakits" element={<Penyakit/>}/>
          <Route path="/gejalas" element={<Gejala/>}/>
          <Route path="/aturans" element={<Aturan/>}/>
          <Route path="/aturans/tambah" element={<FormTambahAturan/>}/>
          <Route path="/aturans/edit/:id" element={<DetailsAturan/>}/>
          <Route path="/skrinings" element={<SkriningPage/>}/>
          <Route path="/penyakits/edit/:id" element={<EditPenyakit/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/gejalas/edit/:id" element={<EditGejala/>}/>
          <Route path="/nganu" element={<AddPenyakit/>}/>
        </Routes>
      </BrowserRouter>
      {/* <PDFViewer>
        <AddPenyakit/>
      </PDFViewer> */}
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactPDF.render(<AddPenyakit />, `${__dirname}/example.pdf`);
// ReactPDF.renderToStream(<AddPenyakit />);

export default App;
