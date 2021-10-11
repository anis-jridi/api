import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const UserList = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let getUsers = async () => {
      try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(res);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="api">
      {post.map((el, i) => (
        <Card post={el} key={i} />
      ))}

      {/* <ul>
               {post.map(post => (
                   <li key = {post.id} >id: {post.id}</li>;
                   <li>name: {post.name} </li>;
                   <li>username: {post.username} </li>;
                   <li> email {post.email} </li>
               ))} 
            </ul> */}
    </div>
  );
};

export default UserList;
