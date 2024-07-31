import logo from '../../img/log.svg';
import admin from '../../img/admin.png'
import user from '../../img/user.png'
import ForgetPasswordWindow from './ForgetPasswordWindow';
import { Link, Route, Routes } from "react-router-dom";
import  register from '../../img/register.svg';
import './home.css';
import './style.css';
import axios from "axios"
import React, { useState } from 'react';

const Homepage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [accountType, setAccountType] = useState('personal');
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);

  const openForgetPasswordWindow = () => {
    setIsForgetPasswordOpen(true);
  };

  const closeForgetPasswordWindow = () => {
    setIsForgetPasswordOpen(false);
  };

  const toggleSignUpMode = () => {
    setIsSignUpMode(prevMode => !prevMode);
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    console.log(`Account type changed to ${type}`);
  };

  return (
    <div className={` container relative bg-white min-h-screen  ${isSignUpMode ? 'sign-up-mode' : ''}`}>

      <div className="forms-container absolute w-full h-full top-0 left-0">
        <div className="signin-signup absolute top-1/2 transform -translate-y-1/2 left-3/4 w-1/2 transition duration-1000 delay-700 ease-in-out grid grid-cols-1 z-5">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="account-type">
            <div class="inputs-box ">

          <div
            className={`account-box ${accountType === 'personal' ? 'selected' : ''}p`}
            onClick={() => handleAccountTypeChange('personal')}
          > 
         
            <div class="box">
            <img src={user} className="logo" alt="" />
            <span>کاربر </span>
            </div>
          </div>
          <div
            className={`account-box ${accountType === 'business' ? 'selected' : ''}`}
            onClick={() => handleAccountTypeChange('business')}
          >
              <div class="box">
            <img src={admin} className="logo" alt="" />
            <span>برگزارکننده</span>
          </div>
          </div>
          </div>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="نام کاربری" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="رمز عبور" />
              
            </div>
            {accountType === 'personal' && (
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="ایمیل" />
              </div>
            )}
            <input type="submit" value="Login" className="btn solid" />
            <div>
      <button onClick={openForgetPasswordWindow}>
      <strong>آیا رمز عبور خود را فراموش کردید ؟</strong>
      </button>
      {isForgetPasswordOpen && (
        <ForgetPasswordWindow onClose={closeForgetPasswordWindow} />
      )}
    </div>
           
            <p className="social-text py-2 text-base">با استفاده از شبکه های اجتماعی خود وارد شوید</p>
            <div className="social-media flex-column justify-center">
              <a href="#" className="social-icon h-11 w-11 flex justify-center items-center mx-1.5 text-gray-700 border-2 border-gray-700 rounded-full text-lg transition duration-300 hover:text-white hover:bg-gray-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon h-11 w-11 flex justify-center items-center mx-1.5 text-gray-700 border-2 border-gray-700 rounded-full text-lg transition duration-300 hover:text-white hover:bg-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon h-11 w-11 flex justify-center items-center mx-1.5 text-gray-700 border-2 border-gray-700 rounded-full text-lg transition duration-300 hover:text-white hover:bg-gray-700">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon h-11 w-11 flex justify-center items-center mx-1.5 text-gray-700 border-2 border-gray-700 rounded-full text-lg transition duration-300 hover:text-white hover:bg-gray-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="نام" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="نام خانوادگی" />
            </div>
            {accountType === 'personal' && (
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="ایمیل" />
              </div>
            )}
                <div className="input-field">
              <i className="fas fa-id-card"></i>
              <input type="id" placeholder="شماره ملی" />
            </div>
               <div className="input-field ">
              <i className="fas fa-phone "></i>
              <input type="phone" placeholder="تلفن" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="رمز عبور" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="تکرار رمز عبور" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">با استفاده از شبکه های اجتماعی خود وارد شوید</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>کاربر جدید هستید؟</h3>
            <p>حساب کاربری ندارید؟ ثبت نام کنید و به تمام خدمات ما دسترسی پیدا کنید</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>Sign up</button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>قبلا در این سایت ثبت نام کردید؟</h3>
            <p>اگر قبلاً یک حساب کاربری در اینجا ایجاد کرده اید، وارد شوید و به تمام خدمات ما دسترسی پیدا کنید</p>
            <br>
            </br>
            <button className="btn transparent" onClick={toggleSignUpMode}>Sign in</button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
 
    </div>
  );
};

export default Homepage;
