import React,{useEffect} from 'react';
import Layout from '../Layout';
import UserList from '../../components/UserList';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';

const User = () => {
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
        <UserList/>
    </div>
  )
}

export default User