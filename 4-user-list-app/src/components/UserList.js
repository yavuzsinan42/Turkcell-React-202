import React, { useEffect, useState } from 'react'
import axios from "axios"

const UserList = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .finally(()=>setLoading(false));
    },[])
  return (
    <div>
    <h2>Kullanıcılar</h2>
    {
        loading && <div>Yükleniyor</div>
    }
    <ul>
    {users.map((user)=>(
<li key={user.id} className="user-element">{user.name}</li>
    ))}
    </ul>
    </div>
  )
}

export default UserList