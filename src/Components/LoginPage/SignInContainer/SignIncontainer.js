import React, { useState } from 'react';
import './SignInContainer.css';

const SignIncontainer = ({ onLogin }) => {
  const [step, setStep] = useState('signIn'); 
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleSignIn = () => {
    if (emailOrMobile === 'netflix@gmail.com' && password === '1234') {
      onLogin(); 
      console.log('Signed In with:', { emailOrMobile, password });
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleRequestOtp = () => {
    setStep('otp');
    console.log('OTP requested for:', emailOrMobile);
  };

  const handleVerifyOtp = () => {
    console.log('OTP verified:', otp);
    setStep('signIn');
    setPassword('');
  };

  return (
    <div className='sighInContainer'>
      <h2>Sign In</h2>
      <h1>{step === 'signIn' ? 'Sign In' : 'Enter OTP'}</h1>
      {step === 'signIn' ? (
        <>
          <input
            placeholder='Email or Mobile number'
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
          />
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href='#' onClick={handleRequestOtp}>
            Forgot password?
          </a>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      ) : (
        <>
          <input
            placeholder='Enter OTP'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default SignIncontainer;
