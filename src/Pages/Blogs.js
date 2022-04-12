import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Store/Auth-Context'
import Login from './Login';

export default function Blogs() {

const authCtx = useContext(AuthContext);

const isLoggedIn = authCtx.isLoggedIn;

console.log('isLoggedIn @blogs : ', isLoggedIn);
  return (
    <div>
    {
      isLoggedIn && (<div>Blogs</div>)
    }
    {
      !isLoggedIn && (<Login />)
    }
    </div>
  )
}
