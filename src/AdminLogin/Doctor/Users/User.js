import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    doctorId: "",
    age: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`/doctinfo/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      
      <h1 className="di
      splay-4">Doctor Details Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">doctorId: {user.doctorId}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">specalization: {user.specalization}</li>
        <li className="list-group-item">phoneNumber: {user.phoneNumber}</li>
        <li className="list-group-item">emailId: {user.emailId}</li>
        <li className="list-group-item">rumNumber: {user.rumNumber}</li>
        <li className="list-group-item">joiningDate: {user.joiningDate}</li>
        <li className="list-group-item">userName: {user.userName}</li>
        <li className="list-group-item">password: {user.password}</li>
      </ul>
    </div>
  );
};

export default User;
