import React, { useEffect, useState } from 'react'
import axios from "axios"

const UserDetail = ({activeUserId}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`).
        then((res)=> setUser(res.data)).
        finally(()=> setLoading(false))
    },[activeUserId])
  return (
    <div>
    <h2>Detaylar</h2>
    {loading && <div>Yükleniyor...</div>}

    <pre>{JSON.stringify(user,null, 2)}</pre>
    </div>
  )
}

export default UserDetail