import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const container= document.getElementById("root") ;
const root= createRoot(container);
root.render(
  <>
    <BrowserRouter>
  <App />
  </BrowserRouter>
  </>,
  
)