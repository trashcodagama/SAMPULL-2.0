import React from "react";
import Loader from "../components/Loader.jsx";
import Landing from "../components/Landing.jsx";
import {UserAuth} from '../context/AuthContext';
import Grid from '@mui/material/Grid';
import {GoogleButton} from 'react-google-button'

const Login = () => {
  const {googleSignIn} = UserAuth();
  const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn();
    }catch(error){
      console.log(error);
    }
  };
  return (
    <div>
      <Landing>

      <h1>Hello! Sign in using Google</h1>
      <br/>
      <br/>
      <GoogleButton onClick={handleGoogleSignIn}/>
      </Landing>
    </div>

  );
};

export default Login;
