import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [error, seterror] = useState('');

  const navigate = useNavigate();
  const handleSignUp = () => {
   
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      seterror('Email already in use.');
    } else if (name.trim() === '' || email.trim() === '' || password.trim() === '' || cpassword.trim() === '') {
      seterror('All fields are mandatory.');
    } else if (password !== cpassword) {
      seterror('Passwords do not match.');
    } else {
     
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      seterror('Registration successful.');


      setTimeout( ()=> {
        navigate('/login'); 
      }, 2000)
      
    }
  };

  return (
    <div className="loginpage">
       <button className='back-btn' onClick={ ()=>navigate('/')}>back</button>
      <div className='section'>
      {error && <p className="error">{error}</p>}
        <div className="heading">
          <h2>Sign Up</h2>
        </div>
        <div className="inputs">
          <input type="text" onChange={(e) => setname(e.target.value)} placeholder='Enter name' />
          <input type="email" onChange={(e) => setemail(e.target.value)} name="email" id="email" placeholder='Email address' />
          <input type="password" onChange={(e) => setpassword(e.target.value)} name='password' placeholder='Password' />
          <input type="password" onChange={(e) => setcpassword(e.target.value)} name="cpassword" placeholder='Confirm Password' />
        </div>
        <div className="btns">
          <button className='signup-btn' onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className="checkboxes">
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="Remember me">Remember me</label>
          </div>
          <Link to="/help">Need Help?</Link>
        </div>
        <div className="all-lables">
          <p>Already have an account?</p>
          <Link to="/login" className='signupbtn'>Sign In Now</Link>
        </div>
        <div className="descriptions">
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          <a href="https://policies.google.com/privacy">Learn More?</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
