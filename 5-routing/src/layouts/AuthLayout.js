import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>AuthLayout
        <hr/>
        <div id='content'>
                <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout