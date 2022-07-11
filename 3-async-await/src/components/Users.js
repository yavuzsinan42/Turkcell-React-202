import React, {useEffect, useState} from 'react'
import axios from "axios"

export default function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts]= useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        /*
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data)
            axios( `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
            .then((res) => setPosts(res.data))
        })
        .finally(()=> setLoading(false))*/

        /* Anonim fonksiyon kullanmak istersek
        (async () => { 
            try {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
        const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
        setUsers(users)
        setPosts(posts)
        setLoading(false)
        
       } catch (error) {
        console.log(error);
       }})()
        
        */
        getData()
    },[])

    const getData = async () => {
       try {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
        const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
        setUsers(users)
        setPosts(posts)
        setLoading(false)
        
       } catch (error) {
        console.log(error);
       }

    }
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
        <h3>Posts</h3>
        {loading && <div>Yükleniyor...</div>}
        <ul>
            {!loading &&
                posts.map((post)=> (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}
