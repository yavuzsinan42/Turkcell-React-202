import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <ul className='menu'>
            <Link to='/'><li>Anasayfa</li></Link>
            <Link to='/users'><li>Kullanıcılar</li></Link>
            <Link to='/contact'><li>İletişim</li></Link>
        </ul>
    </div>
  )
}

export default Header