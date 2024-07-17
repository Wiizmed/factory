import ReactDOM from "react-dom/client";
import React, { useState,useEffect } from "react";
import Workshop from "./workshop/workshop.jsx";
import Workers from "./workers/workers.jsx";
import Products from "./products/allproduct.jsx";
import axios from 'axios';
import Home from "./Home.jsx";
 import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./sidebar.jsx";
import 'bootstrap/dist/css/bootstrap.css';

 const App = () => {
   return (
    <div className="bg">
     <BrowserRouter>
   
   <Sidebar >
         <Routes>
         <Route path="/SignIn" element={<Home />} />
           <Route path="/workers" element={<Workers />} />
           <Route path="/workshop" element={<Workshop/>}  />
              <Route path="/product" element={<Products/>}  />
              
         </Routes>
         </Sidebar>
     </BrowserRouter>
     </div>
   );
 };
 export default App;

 
