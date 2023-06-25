import React,{useState,useEffect} from 'react';
import './Admin.css';
import Styles from "./Style.module.css"

function Pdetails() {
    useEffect(()=>{
        fetchItems();
    },[])

const [items,setItems]=useState([]);
    const fetchItems= async() =>{
        const data= await fetch ('/patinfo');
        //const items = await data.json();
        const info =await data.json();
        console.log(info);
        setItems(info);
        //setItems(data)
    }

  return (
    <div >
       <h1 className={Styles.Welcome}>Patient Information Page</h1>
       <br></br>

<table class="table border shadow">
            <thead class="thead-dark">
              <tr>
              <th scope="col">#</th>
                <th scope="col">PatientId</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">gender</th>
                <th scope="col">address</th>
                <th scope="col">phone_number</th>
                <th scope="col">maritial_status</th>
                <th scope="col">diseaseName</th>
                <th scope="col">ward_rum_num</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <td>{item.patientId}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.maritialStatus}</td>
                  <td>{item.diseaseName}</td>
                  <td>{item.WardRumNum}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
    </div>
  );
}

export default Pdetails;