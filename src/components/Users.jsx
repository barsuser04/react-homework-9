import React from "react";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const showUserName = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    showUserName();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {users.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "#035c4f",
              width: "700px",
              borderRadius: "10px",
              padding: "5px",
              marginTop: "30px",
            }}
            key={item.id}
          >
            <h3>{item.name}</h3>
            <p>{item.id}</p>
            <h5>{item.email}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
