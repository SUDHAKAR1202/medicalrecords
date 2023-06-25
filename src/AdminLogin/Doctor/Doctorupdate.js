import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DoctorUpdate = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/doctinfo");
    setUser(result.data.reverse());
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Doctor Update</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">DoctorId</th>
              <th scope="col">age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.doctorId}</td>
                <td>{user.age}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/Users/EditUser/${user.doctorId}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorUpdate;
