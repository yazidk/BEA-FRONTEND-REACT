import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
          <div className='login'>
                <span className="loginTitle"> Login</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input className='loginInput' type="email" placeholder='Email' />
                    <label>Password</label>
                    <input className='loginInput' type="password" placeholder='Password' />
                    <button className="loginButton"><Link to={'/'}> Login</Link></button>
                </form>
            
          </div>
  )
}
