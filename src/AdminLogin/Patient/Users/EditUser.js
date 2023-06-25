import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    PatientId: "",
    age: "",
    gender: "",
    address: "",
    phone_number: "",
    maritial_status: "",
    diseaseName: "",
    ward_rum_num: ""
  });

  const { name, PatientId, age, gender, address, phone_number, maritial_status, diseaseName, ward_rum_num } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`/patinfo`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`/patinfo/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Patient</h2>
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
              placeholder="PatientId"
              name="PatientId"
              value={PatientId}
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
              placeholder="phone_number"
              name="phone_number"
              value={phone_number}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="maritial_status"
              name="maritial_status"
              value={maritial_status}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="diseaseName"
              name="diseaseName"
              value={diseaseName}
              onChange={e => onInputChange(e)}
            />
          </div> <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ward_rum_num"
              name="ward_rum_num"
              value={ward_rum_num}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
