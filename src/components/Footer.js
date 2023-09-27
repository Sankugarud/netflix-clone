import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="heading">
            <p>Questions? Call <span>000-800-919-1694</span> </p>
        </div>
        <div className="allsections">
            <div className="sec1 sec">
                <Link to="/">FAQ</Link>
                <Link to="/">Investor Relations</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Speed Test</Link>
            </div>
            <div className="sec2 sec">
                <Link to="/">Help Centre</Link>
                <Link to="/">Jobs</Link>
                <Link to="/">Cookie Preferences</Link>
                <Link to="/">Legal Notices</Link>
            </div>
            <div className="sec3 sec">
                <Link to="/">Account</Link>
                <Link to="/">Ways to Watch</Link>
                <Link to="/">Corporate Information</Link>
                <Link to="/">Only on Netflix</Link>
            </div>
            <div className="sec4 sec">
                <Link to="/">Media Centre</Link>
                <Link to="/">Terms of Use</Link>
                <Link to="/">Contact Us</Link>
            </div>
        </div>
        <h3>Netflix India</h3>
    </div>
  )
}

export default Footer