import React,{useEffect} from 'react'
import Layout from './Layout'
import GejalaList from '../components/GejalaList';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Gejala = () => {
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
        <GejalaList/>
    </div>
  )
}

export default Gejala