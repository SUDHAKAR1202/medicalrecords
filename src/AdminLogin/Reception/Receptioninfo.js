import React,{useState,useEffect} from 'react';
import './Admin.css';
import Styles from "./Style.module.css"

function Receptioninfo() {
    useEffect(()=>{
        fetchItems();
    },[])

const [items,setItems]=useState([]);
    const fetchItems= async() =>{
        const data= await fetch ('/receptinfo');
        //const items = await data.json();
        const info =await data.json();
        console.log(info);
        setItems(info);
        //setItems(data)
    }

  return (
    <div >
       <h1 className={Styles.Welcome}>Receptionist Information Page</h1>
       <br></br>

<table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">receptionistId</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">gender</th>
                <th scope="col">address</th>
                <th scope="col">phoneNumber</th>
                <th scope="col">emialId</th>
                <th scope="col">joiningDate</th>
                <th scope="col">userName</th>
                <th scope="col">password</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.receptionistId}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.emialId}</td>
                  <td>{item.joiningDate}</td>
                  <td>{item.userName}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
    </div>
  );
}

export default Receptioninfo;
