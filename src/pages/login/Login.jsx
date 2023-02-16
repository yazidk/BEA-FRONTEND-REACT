import {useState} from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

export default function Login() {
  
  const navigate =  useNavigate() ;
  const [loginInput , setLoginInput] = useState({
       email : '' ,
       password : '' , 
       error_list : [] 
  }) ;
  
  const handleInput = (e) =>{
    e.persist();
    setLoginInput({...loginInput , [e.target.name] : e.target.value})
  }

  const loginSubmit = (e) => { 
     e.preventDefault();
     const data =  {
      email :  loginInput.email ,
      password :  loginInput.password ,
     }

     /* axios.get('/sanctum/csrf-cookie').then(response => { */
      axios.post('/api/login' , data ).then( res => {
         
          if(res.data.status === 200) {
                  console.log(res.data.token)
                  console.log(res.data.username)
                  localStorage.setItem('auth_token' , res.data.token);
                  localStorage.setItem('auth_name' , res.data.username);
                  
                  swal("Success" , res.data.message , "success");
                 
                      navigate('/');
          }
         
          
          else {
            setLoginInput({...loginInput, error_list : res.data.validation_errors })
          }
      });

 /* }); */


  }
  
  return (
          <div className='login' >
                <span className="loginTitle"> Login</span>
                <form className="loginForm" onSubmit={loginSubmit}>
                    <label>Username</label>
                    <input className='loginInput' type="email" name="email" onChange={handleInput} value={loginInput.email} placeholder='Username' />
                    <span>{loginInput.error_list.email}</span>
                    <label>Password</label>
                    <input className='loginInput' type="password" name="password" onChange={handleInput} value={loginInput.password} placeholder='Password' />
                    <span>{loginInput.error_list.password}</span>
                    <button type="submit" className="loginButton"> Login</button> 
                </form>
            
          </div>
  )
}

