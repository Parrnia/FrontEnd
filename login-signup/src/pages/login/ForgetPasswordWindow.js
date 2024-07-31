import React, { useState } from 'react';
import logo from '../../img/password.png';
const ForgetPasswordWindow = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Forgot password for email: ${email}`);
  };

  return (
    <div className="forget-password-window">
        <div className="icon">
        <img src={logo} alt="Icon" />
      </div>
      <span className="close-icon" onClick={onClose}>
        <i className="fas fa-times"></i>
      </span>

     <strong><h2>بازیابی رمز عبور </h2></strong> 
      <p>برای بازیابی رمز عبور خود، ایمیل خود را وارد نمایید</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">بازیابی رمز عبور</button>
      </form>

    
    </div>
  );
};

export default ForgetPasswordWindow;