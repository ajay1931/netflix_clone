import React, { useState } from 'react';
import './LoginContainer.css';
import SignIncontainer from '../SignInContainer/SignIncontainer';
import Home from '../../Pages/HomePage/Home';

const LoginContainer = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className='loginContainer'>
      {!isLoggedIn && (
        <div className='loginContainer_header'>
          <div className='loginContainer_header_left'>
            <h1>NETFLIX</h1>
          </div>
          <div className='loginContainer_header_right'>
            <button onClick={handleSignInClick}>Sign in</button>
          </div>
        </div>
      )}
      
      {isLoggedIn ? (
        <Home />
      ) : !showSignIn ? (
        <div className='loginContainer_content'>
          <h1>Unlimited movies,</h1>
          <h1>TV shows and more</h1>
          <h3>Starts at ₹149. Cancel anytime.</h3>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className='loginContainer_content_login'>
            <input placeholder='Email address' />
            <button>Get Started</button>
          </div>
        </div>
      ) : (
        <SignIncontainer onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default LoginContainer;
