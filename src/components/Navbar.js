import React,{useState, useEffect} from 'react'
import logo from '../images/image.png'
import './navbar.css'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
          navigate('/login');
        }
      }, [navigate]);
    const logoutclick = () => {
        setTimeout(() => {
            localStorage.setItem('isAuthenticated', 'false');
            navigate('/')
        }, 2000);
    }

  return (
    <div className={`navbar ${show && "nav_black"}`}>
        <div className="left_side">
            <Link to='home'><img src={logo} alt="netflix_logo" className='logo-img'/></Link>
            
        </div>
        <div className="right_side">
            <Link to="/series">Series</Link>
            <Link to="/movies">Movies</Link>
            <a href="/newandpopular">New & Popular</a>
            <button className='logout' onClick={logoutclick}>Logout</button>
        </div>
    </div>
  )
}


export default Navbar