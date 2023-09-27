import React,{useState} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
     const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setError('Email not found.');
    } else if (user.password !== password) {
      setError('Wrong password.');
    } else {
      // Login successful, navigate to the home page
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    }
  }  

  return (
    <div className="loginpage">
      <button className='back-btn' onClick={ ()=>navigate('/')}>back</button>
        <div className='section'>
        {error && <p className="error">{error}</p>}
          <div className="heading">
            <h2>Sign In</h2>
          </div>
          <div className="inputs">
            <input type="email" onChange={ (e)=> setemail(e.target.value)} name="email" id="email" placeholder='Email address'/>
            <input type="password" onChange={ (e)=> setpassword(e.target.value)} placeholder='Password' />
          </div>
          <div className="btns">
            <button className='sign-btn' onClick={handleClick}>Sign In</button>
          </div>
          <div className="checkboxes">
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="Remember me">remember me</label>
            </div>
              <a href="/Help">Need Help?</a>
          </div>
          <div className="lables">
            <p>New To Netflix? </p>
            <Link to="/signup" className='signupbtn'>Sign Up Now</Link> 
          </div>
          <div className="discriptions">
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            <a href="https://policies.google.com/privacy">Learn More?</a>
          </div>
      </div>
    </div>
    
  )
}

export default Login