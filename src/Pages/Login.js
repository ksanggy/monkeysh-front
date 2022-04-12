import React, { useState, useContext, useRef } from 'react';
import {FaHandPointLeft, FaTerminal} from 'react-icons/fa';
import {Navigate, useNavigate} from 'react-router-dom';
import AuthContext from '../Store/Auth-Context';

export default function Login() {

  // const [email, setEmail] = useState('');
  // const [passwordHash, setPasswordHash] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);

  const emailInputRef = useRef();
  const passwordHashInputRef = useRef();
  
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const processLogin = ()=>{
    const enteredEmail = emailInputRef.current.value;
    const enteredPasswordHash = passwordHashInputRef.current.value;
    const formData = new FormData();
    
    formData.append('email', enteredEmail);
    formData.append('passwordHash', enteredPasswordHash);

    fetch('/api/login', {
      method:"POST",
      // headers: {
      //   "Content-Type":"application/x-www-form-urlencoded"
      // },
      body: formData
    }).then((resp)=>{
      console.info(resp.status);
      if(resp.status !== 200){
        handleError(resp);
        return navigate(`/login`);
      }
      return resp.json();
    }).then((data)=>{
      authCtx.login(data.access_token);
      console.log("access_token :: ", data.access_token);
      console.log("refresh_token :: ", data.refresh_token);
      return navigate(`/blogs`);
    });
  }

  const handleError = (response) => {
    const errorType = response.json().error;
    if(response.status === 404)
      setUserNotFound(true);
      return;
    
    // if(response.json().)
    
    
  }

  return (
    <div>
        <main className="form-signin mx-auto bg-dark">
          <div className='login'>
            <FaTerminal className='fs-1 text-warning'/>
            <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" placeholder="name@example.com" name='email' ref={emailInputRef}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" placeholder="Password" name='passwordHash' ref={passwordHashInputRef}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3 text-white">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary mb-3" onClick={processLogin}>Sign in</button>
            <p>없는 계정입니다. 회원가입 후 다시 진행해주세요.</p>
          </div>
        </main>
    </div>
  )
}
