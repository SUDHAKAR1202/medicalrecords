import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    patientid: "",
    age: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`/patinfo/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      
      <h1 className="di
      splay-4">Patient Details Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">patientid: {user.patientId}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">gender: {user.gender}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">phoneNumber: {user.phoneNumber}</li>
        <li className="list-group-item">maritialStatus: {user.maritialStatus}</li>
        <li className="list-group-item">diseaseName: {user.diseaseName}</li>
        <li className="list-group-item">WardRumNum: {user.WardRumNum}</li>
        <li className="list-group-item">dob: {user.date}</li>
      </ul>
    </div>
  );
};

export default User;
