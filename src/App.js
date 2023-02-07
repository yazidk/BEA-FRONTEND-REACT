import React from "react";
import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";
import AddFicheTenueCompte from "./pages/ficheTenueCompte/AddFicheTenueCompte";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/Login";

function App() {
  return (
      <Router>
           <Routes> 
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} /> 
                <Route path="/ajouter-fiche" element={<AddFicheTenueCompte />} />
                    
                
                
              
           </Routes>
            
           
      </Router>
  );
}

export default App;
