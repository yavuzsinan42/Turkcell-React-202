import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={""+user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
