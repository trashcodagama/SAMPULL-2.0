import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material/styles";
import theme1 from "./const/theme"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme1}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
