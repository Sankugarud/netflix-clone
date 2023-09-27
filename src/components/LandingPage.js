import React, {useState} from 'react'
import './landing.css'
import tvimg from '../images/tv_image.png'
import mobileimg from '../images/netflix_mobile.jpg'
import childrenimg from '../images/childrenimg.png'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/image.png'


const LandingPage = () => {
  
    const [expandedItems, setExpandedItems] = useState([]);
    const [emailverify, setemailverify] = useState("");
    const [error, seterror] = useState("");
  
    const navigate = useNavigate();
    const toggleExpand = (index) => {
      if (expandedItems.includes(index)) {
        setExpandedItems(expandedItems.filter((item) => item !== index));
      } else {
        setExpandedItems([...expandedItems, index]);
      }
    };
    const handleclick = () => {
      if (emailverify.trim() === "") {
        seterror("Please enter an email");
      } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.email === emailverify);
    
        if (!user) {
          seterror("Redirect to signup page");
          setTimeout(() => {
            navigate("/signup");
          }, 2000);
        } else {
          seterror("Redirect to login page");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    
    }
  const listItems = [
    {
      title: 'What Is Netflix?',
      description: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!',
    },
    {
      title: 'How much does Netflix cost?',
      description: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.',
    },
    {
      title: 'Where Can i watch?',
      description: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
      title: 'How do i cancel?',
      description: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      title: 'Is Netflix good for kids?',
      description: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },

    // Add more items as needed
  ];
  return (
    <div>
        <div className="hero">
          <div className="navbar">
            <div className="left_side">
              <img src={logo} alt="netflix_logo" className='logo-img'/>
            </div>
            <div className="right_Side">
               <Link to='login' className='login-btn'>Sign In</Link>
            </div>
          </div>
            <div className="hero_containe">
              <p className='error'>{error}</p>
                <h1>Laughter. Tears. Thrills. Find it all on Netflix...</h1>
                <h4>Endless entertainment starts at just ₹ 149. Cancel anytime.</h4>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="get_started">
                    <input onChange={ (e)=>setemailverify(e.target.value)} type="email" placeholder='Email address'/>
                    <button onClick={handleclick} className='btn_started'>Get Started</button>
                </div>
            </div>
        </div>
        <hr />
            <div className="enjoy_tv">
              <div className="section1">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
              </div>
              <div className="section2">
                 <img className='tv_img' src={tvimg} alt="tvimg" />
              </div>
            </div>
            <hr />
            <div className="enjoy_tv">
              <div className="section2">
                 <img className='tv_img' src={mobileimg} alt="tvimg" />
              </div>
              <div className="section1">
                <h1>Download your shows to watch offline.</h1>
                <p>Save your favourites easily and always have something to watch.</p>
              </div>
              
            </div>
            <hr />
            <div className="enjoy_tv">
              <div className="section1">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <div className="section2">
                 <img className='tv_img' src={tvimg} alt="tvimg" />
              </div>
            </div>
            <hr />
            <div className="enjoy_tv">
            <div className="section2">
                 <img className='tv_img' src={childrenimg} alt="tvimg" />
              </div>
              <div className="section1">
                <h1>Create profiles for kids</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
              </div>
              
            </div>
            <hr />
            <div >
              {listItems.map((item, index) => (
                <div key={index} className='informations'>
                  <div
                    className="list-item"
                    onClick={() => toggleExpand(index)}
                  >
                    <span>{item.title}</span>
                    <span className="expand-button">
                      {expandedItems.includes(index) ? '-' : '+'}
                    </span>
                  </div>
                  {expandedItems.includes(index) && (
                    <div className="additional-info">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Footer/>
    </div>
  )
}

export default LandingPage