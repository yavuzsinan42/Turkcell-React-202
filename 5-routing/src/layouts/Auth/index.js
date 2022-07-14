import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./styles.css"

const AuthLayout = () => {
  return (
    <div>
      
        <hr/>
        <div className='auth-container'>
        <div className='auth-menu'>
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
      </div>
                <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout