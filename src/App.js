import React from "react";
import { BrowserRouter as Router  , Routes , Route , Navigate } from "react-router-dom";
import AddFicheTenueCompte from "./pages/ficheTenueCompte/AddFicheTenueCompte";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] =  'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
   const token =  localStorage.getItem('auth_token') ;
   config.headers.Authorization = token ? `Bearer ${token}` : '' ;
   return config ; 
});


function App() {
  return (
      <Router>
           <Routes> 
               
              <Route exact
                  path="/login"
                  element={
                      localStorage.getItem('auth_token') ? (
                         <Navigate replace to={"/"} />
                   
                      ) : (
                         <Login />
                      )
                      }
                />
                <Route path="/" element={<Dashboard />} /> 
                <Route path="/ajouter-fiche" element={<AddFicheTenueCompte />} />
                    

                
              
           </Routes>
            
           
      </Router>
  );
}

export default App;
