import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    doctorId: "",
    age: "",
    gender: "",
    address: "",
    phoneNumber: "",
    specalization: "",
    emaiId: "",
    RumNumber: "",
    joiningDate: "",
    userName: "",
    password: ""
  });

  const { name, doctorId, age, gender, address, phoneNumber, specalization, emaiId, RumNumber,joiningDate,userName,password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`/doctinfo`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`/doctinfo/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Doctor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="doctorId"
              name="doctorId"
              value={doctorId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="gender"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="specalization"
              name="specalization"
              value={specalization}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="emaiId"
              name="emaiId"
              value={emaiId}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="RumNumber"
              name="RumNumber"
              value={RumNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <h3>joiningDate:</h3>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="joiningDate"
              name="joiningDate"
              value={joiningDate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="userName"
              name="userName"
              value={userName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
