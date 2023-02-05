import React from "react";
import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";
import AddFicheTenueCompte from "./components/ficheTenueCompte/AddFicheTenueCompte";

function App() {
  return (
      <Router>
           <Routes> 
               
                <Route path="/ajouter-fiche" element={<AddFicheTenueCompte />} />
                    
                
                
              
           </Routes>
            
           
      </Router>
  );
}

export default App;
