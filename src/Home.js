import React from 'react';
import './App.css';


function Home() {
  return (
    <div >
       <h1 class="text-center text-primary text-capitalize font-weight-bold ">Online Medical Records</h1>
        <br/>
    
        <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
               {/*  <!-- Brand/logo --> */}
                <a class="navbar-brand" href="#">
                  <img src="./assets/medicallogo.jpg" alt="logo"  />
                </a>
                
                {/* <!-- Links --> */}
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/admin/adminhome">Admin</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/admin/doctorhome">Doctor</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/admin/patienthome">Patient</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/admin/receptionisthome">Receptionist</a>
                  </li>
                </ul>
              </nav>
              
              <div id="demo" class="carousel slide" data-ride="carousel"/>

               {/*  <!-- Indicators --> */}
                <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                
                {/* <!-- The slideshow --> */}
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="./assets/sal.jpg" alt="Medical" width="1100" height="500"/>
                  </div>
                  <div class="carousel-item">
                    <img src="./assets/sal2.jpg" alt="Medical" width="1100" height="500"/>
                  </div>
                  <div class="carousel-item">
                    <img src="./assets/sal3.jpg" alt="Medical" width="1100" height="500"/>
                  </div>
                  
                
                {/* <!-- Left and right controls --> */}
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>     
        </header>
    <section>
        <div class="container-fluid">
           <h1 class="text-center text-capitalize pt-5">about us</h1> 
            <hr class="w-25 mx pt-5"/>
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-12">
                    <img src="./assets/medicallogo.jpg" class="img-fluid"/> 
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <h1>The Function Details</h1>
                    <hr/>
                    <p>
                        In Online medical record includes information about a patient's health history, such as diagnoses, medicines, tests and treatment plans. The medical records are the records of the patient's disease occurrence, development, examination, diagnosis, and treatment. Medical records are an important part of medical care, teaching, prevention, research and development. They are the basic support conditions for hospital management. It is difficult to keep the traditional paper medical records. It is also difficult to query the paper medical records. With the development of information technology, it is possible to realize the medical record management through information systems. The electronic medical record system is very important for the digital management of the medical records. It has greatly improved the hospital's management efficiency. 
                    </p>  
                </div>
            </div>
      
        </div>
    </section>

        
       
    </div>
  );
}

export default Home;
