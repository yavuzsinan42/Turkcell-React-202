import React, {useEffect, useState} from 'react'

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .finally(()=> setLoading(false))
    },[])
  return (
    <div>
        <h3>Users</h3>
        {loading && <div>Yükleniyor...</div>}
        <ul>
            {!loading &&
                users.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}
