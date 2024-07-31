import logo from '../../img/log.svg';
import admin from '../../img/admin.png'
import user from '../../img/user.png'
import ForgetPasswordWindow from './ForgetPasswordWindow';
import  register from '../../img/register.svg';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import axios from "axios"
import React, { useState ,useEffect } from 'react';
import { Component } from 'react';
const Homepage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [accountType, setAccountType] = useState('personal');
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
  
  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      api_key: 'd025466f-8ec7-4434-afbe-dab5343815a7',
      token: null,
      member_id: null,
      table: 'login',
      method_type: 'login',
      data: {
        user: username,
        pass: password,
      },
    };

    axios
      .post('https://my.pouyanbroker.com/StudentScientificSociety/login', loginData)
      .then((response) => {
        console.log('Login successful:', response.data);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };
    
  const handleSignUp = (e) => {
    e.preventDefault();

    const signupData = {
      api_key: 'd025466f-8ec7-4434-afbe-dab5343815a7',
      token: 'free_user',
      member_id: 'free_id',
      table: 'members',
      method_type: 'register',
      data: {
        first_name: firstName,
        last_name: lastName,
        national_id: nationalId,
        user: username,
        phone: phone,
        email: email,
        password_confirm: confirmPassword,
        password: password
      }
    };

    axios
      .post('https://my.pouyanbroker.com/StudentScientificSociety/insert_request', signupData)
      .then((response) => {
        console.log('sign up successful:', response.data);
      })
      .catch((error) => {
        console.error('sign up failed:', error);
      });
  };

  return (
    <div className={`${styles.container}  ${isSignUpMode ? styles['sign-up-mode'] : ''}`}>
    <div className={`${styles['forms-container']} `}>
      <div className= {styles['signin-signup']}>
        <form action="#" onSubmit={handleLogin} className={`${styles['sign-in-form']} ${styles['form']}`}>
          <h2 className={styles.title}>Sign in</h2>
          <div className="account-type">
            <div className={styles['inputs-box']}>
              <div
                className={`${styles['account-box']} ${accountType === 'personal' ? styles.selected : ''} ${styles.p}`}
                onClick={() => handleAccountTypeChange('personal')}
              >
                <div className={styles.box}>
                  <img src={user} className={styles.logo} alt="" />
                  <span>کاربر </span>
                </div>
              </div>
              <div
                className={`${styles['account-box']} ${accountType === 'business' ? styles.selected : ''}`}
                onClick={() => handleAccountTypeChange('business')}
              >
                <div className={styles.box}>
                  <img src={admin} className={styles.logo} alt="" />
                  <span>برگزارکننده</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['input-field']}>
            <i className="fas fa-user"></i>
            <input
                type="text"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className={styles['input-field']}>
            <i className="fas fa-lock"></i>
            <input
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {accountType === 'personal' && (
            <div className={styles['input-field']}>
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="ایمیل" />
            </div>
          )}
          <input type="submit" value="Login" className={`${styles.btn} ${styles.solid}`} />
          <div>
            <button onClick={openForgetPasswordWindow}>
              <strong>آیا رمز عبور خود را فراموش کردید ؟</strong>
            </button>
            {isForgetPasswordOpen && (
              <ForgetPasswordWindow onClose={closeForgetPasswordWindow} />
            )}
          </div>
          <p className={`${styles['social-text']} py-2 text-base`}>با استفاده از شبکه های اجتماعی خود وارد شوید</p>
          <div className={`${styles['social-media']} flex-column justify-center`}>
            <a href="#" className={styles['social-icon']}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles['social-icon']}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles['social-icon']}>
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className={styles['social-icon']}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
       
<form action="#" onSubmit={handleSignUp}  className={`${styles['sign-up-form']} ${styles['form']}`}>
  <h2 className={styles['title']}>Sign up</h2>
  <div className={styles['input-field']}>
    <i className="fas fa-user"></i>
    <input
  type="text"
  placeholder="نام"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  name="first_name"
/>

  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-user"></i>
    <input
  type="text"
  placeholder="نام خانوادگی"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  name="last_name"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-user"></i>
    <input
  type="text"
  placeholder="نام کاربری"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  name="user"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-id-card"></i>
    <input
  type="id"
  placeholder="شماره ملی"
  value={nationalId}
  onChange={(e) => setNationalId(e.target.value)}
  name="national_id"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-phone"></i>
   
<input
  type="phone"
  placeholder="تلفن"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  name="phone"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-envelope"></i>
    <input
  type="email"
  placeholder="ایمیل"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  name="email"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-lock"></i>
    <input
  type="password"
  placeholder="رمز عبور"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  name="password"
/>
  </div>
  <div className={styles['input-field']}>
    <i className="fas fa-lock"></i>
    <input
  type="password"
  placeholder="تکرار رمز عبور"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  name="password_confirm"
/>
  </div>
  <input type="submit" className={styles['btn']} value="Sign up" />
  <p className={styles['social-text']}>با استفاده از شبکه‌های اجتماعی خود وارد شوید</p>
  <div className={styles['social-media']}>
    <a href="#" className={styles['social-icon']}>
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className={styles['social-icon']}>
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className={styles['social-icon']}>
      <i className="fab fa-google"></i>
    </a>
    <a href="#" className={styles['social-icon']}>
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</form>
        </div>
      </div>

      <div className={styles['panels-container']}>
  <div className={`${styles['panel']} ${styles['left-panel']}`}>
    <div className={styles['content']}>
      <h3>کاربر جدید هستید؟</h3>
      <p>حساب کاربری ندارید؟ ثبت نام کنید و به تمام خدمات ما دسترسی پیدا کنید</p>
      <button className={`${styles['btn']} ${styles['transparent']}`} onClick={toggleSignUpMode}>Sign up</button>
    </div>
    <img src={logo} className={styles['image']} alt="" />
  </div>
  <div className={`${styles['panel']} ${styles['right-panel']}`}>
    <div className={styles['content']}>
      <h3>قبلا در این سایت ثبت نام کردید؟</h3>
      <p>اگر قبلاً یک حساب کاربری در اینجا ایجاد کرده اید، وارد شوید و به تمام خدمات ما دسترسی پیدا کنید</p>
      <br />
      <button className={`${styles['btn']} ${styles['transparent']}`} onClick={toggleSignUpMode}>Sign in</button>
    </div>
    <img src={register} className={styles['image']} alt="" />
  </div>
</div>
</div>
  );
};

export default Homepage;
