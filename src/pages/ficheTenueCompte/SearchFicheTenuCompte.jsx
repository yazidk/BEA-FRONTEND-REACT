import React , {useEffect, useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Head from "../../components/head/Head";
<<<<<<< HEAD
function SearchFicheTenuCompte () {
     
    const [data , setData] = useState([]); 
=======
import axios from "axios";

function SearchFicheTenuCompte () {
     
   
    const [ficheComptes , setFicheComptes] = useState([]);
    const [searchFicheComptes , setSearchFicheComptes] = useState('');
>>>>>>> origin/yazid_home
    
    useEffect(() => {
      getAllFicheComptes();
    }, []);

    const getAllFicheComptes = async () => {
        try {
              await axios.get('/api/all-fiche-comptes/')
              .then( res => {
                setFicheComptes(res.data.fiche_tenues);  
                console.log("OK");
              })
        } catch(error){
              console.log(error);
        }
    }
     
    return (
      
        <div className="page d-flex">
        {/* Start Sidebar */}
        <Sidebar />
        {/* End Sidebar */}
        <div className="content w-full">
            {/* <!-- Start Head --> */}
            <Head />
            {/* <!-- End Head --> */}
            <div className="container">
                  
                  <h1> Rechercher Compte</h1>
                  <input type="text" placeholder="Search Here" value={searchFicheComptes}  onChange={(e) => setSearchFicheComptes(e.target.value)} className="form-control"  />

                  <div className="">
                      { 
                         ficheComptes.filter(fiche => fiche.compte_bancaire_num.includes(searchFicheComptes)) 
                         .map(fiche => (
                          <div key={fiche.id}>
                             <p>{fiche.compte_bancaire_num}</p>  
                          </div>
                         )
                                               
                         )
                      }
                  </div>
            </div>
        </div>
    </div>
    )
}


export default SearchFicheTenuCompte ;