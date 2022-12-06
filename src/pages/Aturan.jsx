import React,{useEffect} from 'react'
import AturanList from '../components/AturanList';
import Layout from './Layout';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Aturan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state=> state.auth));

  useEffect(()=>{
    dispatch(getMe());
  },[dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/login");
    }
  },[isError,navigate]);
  return (
    <div>
        <Layout/>
        <AturanList/>
    </div>
  )
}

export default Aturan