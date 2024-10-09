import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { LoginSocialFacebook, LoginSocialInstagram, LoginSocialLinkedin, LoginSocialPinterest } from 'reactjs-social-login';
import { FaFacebook, FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';
import '../Styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with:', email, password);
    localStorage.setItem('isLoggedIn', 'true'); 
    navigate('/home');
  };

  const responseFacebook = (response) => {
    if (response && response.accessToken) {
      console.log('Facebook login successful:', response);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }
  };
  
  const responseLinkedin = (response) => {
    console.log('Linkedin login successful:', response);
    if (response && response.accessToken) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }
  };

  const responsePinterest = (response) => {
    console.log('Pinterest login successful:', response);
    if (response && response.accessToken) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }
  };
  
  const responseInstagram = (response) => {
    console.log('Instagram login successful:', response);
    if (response && response.accessToken) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    }
  };

  return (
    <div className="page-container">
      
      <div className="login-container">
        <h2 className="heading">Login Form</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <p>Or log in with:</p>
          <div className="social-buttons">
            <LoginSocialFacebook
              appId="APP_ID"
              onResolve={responseFacebook}
              onReject={(error) => console.log(error)}
            >
              <button className="facebook-button">
                <FaFacebook className="icon" /> 
              </button>
            </LoginSocialFacebook>

            <LoginSocialLinkedin
              appId="APP_ID"
              onResolve={responseLinkedin}
              onReject={(error) => console.log(error)}
            >
              <button className="linkedin-button">
                <FaLinkedin className="icon" /> 
              </button>
            </LoginSocialLinkedin> 
            
            <LoginSocialPinterest
              appId="APP_ID"
              onResolve={responsePinterest}
              onReject={(error) => console.log(error)}
            >
              <button className="pinterest-button">
                <FaPinterest className="icon" /> 
              </button>
            </LoginSocialPinterest>

            <LoginSocialInstagram
              appId="APP_ID"
              onResolve={responseInstagram}
              onReject={(error) => console.log(error)}
            >
              <button className="instagram-button">
                <FaInstagram className="icon" /> 
              </button>
            </LoginSocialInstagram>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
