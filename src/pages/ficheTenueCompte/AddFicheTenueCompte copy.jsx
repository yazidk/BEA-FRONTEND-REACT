import axios from "axios";
import React , {useState} from "react";
import swal from "sweetalert";
import './AddFicheTenueCompte.css'

const AddFicheTenueCompte = () => {
    // Start  states 
   const [ficheTenueInput , setFicheTenue] = useState({ 
        compte_bancaire_num : '' 
   });
  const [ imagedata , setImagedata] =  useState(''); 
  const [imagePreview, setImagePreview] = useState('');
   // End states 

    const handleInput = (e) => {
        e.persist();
        setFicheTenue({...ficheTenueInput , [e.target.name] : e.target.value});
       
    }
    
    const handleImage = (file) => {
        setImagedata(file[0]);  
    }


    const submitFicheTenue = async(e) => {
     e.preventDefault() ;
     const formData  = new FormData();
     formData.append('compte_bancaire_num' , ficheTenueInput.compte_bancaire_num);
     formData.append('uploadImageFicheTenue' , imagedata);
    try {
        await axios.post('http://localhost:8000/api/ajouter-fiche' , formData).then(res => {
            if (res.data.status === 200) {
                swal('Success' , res.data.message , "success");
                setFicheTenue({...ficheTenueInput,
                    compte_bancaire_num : '',
                });
                setImagedata({...imagedata,
                    uploadImageFicheTenue : ''
                })
                
            }
     })
    }
    catch(error) {
        console.log(error)
    }
 
    }
    return (
        <div className="FichetenueCompte">
             <div className="image">
                  <div className="content">
                       <h2> Banque Extérieure D'Algérie - BEA</h2> 
                       <p> 
                       Pour ouvrir un compte BEA  Les documents requis sont les suivants : <br />
 																								
                       * Justificatif d’identité ( Carte d’identité nationale, Permis de conduire…etc ) .<br />																							
                       * Justificatif de domicile ( Certificat de résidence).
                                                                                                                                                                                                 
                       </p>
                       <img src="/images/ficheTenueCompte.png" alt="" />
                  </div>
              </div>
              <div className="form">
                  <div className="content">
                     <h2>Fiche de tenue de compte BANK </h2>
                     <form onSubmit={submitFicheTenue} >          
                            
                            <input className="input" type="text" onChange={handleInput} value={ficheTenueInput.compte_bancaire_num} placeholder="Compte Bancaire N°" name="compte_bancaire_num" />
                            <input className="input" name="uploadImageFicheTenue" type="file" onChange={(e) => { handleImage(e.target.files) ;  setImagePreview(URL.createObjectURL(e.target.files[0])); }} /> 
                            <img src={imagePreview} alt=""  />
                            <input type="submit" value="Ajouter Cette Fiche" />
                     </form>
                  </div>
                  
              </div> 
        </div>
    )
}


export default AddFicheTenueCompte ;