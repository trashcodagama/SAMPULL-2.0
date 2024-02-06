import React from "react";
import Loader from "../components/Loader.jsx";
import Landing from "../components/Landing.jsx";

import Grid from '@mui/material/Grid';
import {GoogleButton} from 'react-google-button'

const Login = () => {
  return (
    <div>
      <Landing>

      <h1>Hello! Sign in using Google</h1>
      <br/>
      <br/>
      <GoogleButton/>
      </Landing>
    </div>

  );
};

export default Login;
