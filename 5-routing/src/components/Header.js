import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <li onClick={()=>navigate(-1)} className="geri-btn">Geri</li>
            <Link to='/'><li>Anasayfa</li></Link>
            <Link to='/users'><li>Kullanıcılar</li></Link>
            <Link to='/contact'><li>İletişim</li></Link>
        </ul>
    </div>
  )
}

export default Header