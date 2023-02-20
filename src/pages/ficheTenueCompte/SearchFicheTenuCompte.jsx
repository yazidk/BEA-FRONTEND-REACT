import React , {useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Head from "../../components/head/Head";
function SearchFicheTenuCompte () {
     
    const [data , setData] = useState([]); 
    
    async function search(key) {
     console.warn(key);
     let result = fetch("/api/search/"+key);
     result = await result.json(); 
     setData(result);
      
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
                  
                  <h1> Search Compte</h1>
                  <input type="text" placeholder="Search Here" onChange={(e)=>search(e.target.value)} className="form-control" />
            </div>
        </div>
    </div>
    )
}


export default SearchFicheTenuCompte ;