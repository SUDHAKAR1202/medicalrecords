import React from 'react';
import './Admin.css';


function Admindoctorhomepage() {
  return (
    <div >
     <header>

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1>Doctors Master Control</h1>      
              <p>This is page is made to control all the operations regarding doctor suchas adding doctor or update some data regarding doctor or delete the doctor or get information regarding doctor </p>
            </div>
          </div>
        
        
        <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
            <a class="navbar-brand" href="#">
                <img src="./assets/medicallogo.jpg" alt="logo" />
              </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/doctadd">Add</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/doctupdate">Update</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/doctdelete">Delete</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/doctinfo">Get</a>
              </li>
            </ul>
          </nav>
          

          <div id="demo" class="carousel slide" data-ride="carousel">

           {/*  <!-- Indicators --> */}
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            
           {/*  <!-- The slideshow --> */}
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
            </div>
            
           {/*  <!-- Left and right controls --> */}
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>     
    </header>
    <section>
        <div class="container-fluid" >
            <h1 class="text-dark text-capitalize pt-5 ">Quotes</h1>
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-12">
                    <hr/>
                    <p>
                        “A doctor, like anyone else who has to deal with human beings, each of them unique, cannot be a scientist; he is either, like the surgeon, a craftsman, or, like the physician and the psychologist, an artist. This means that in order to be a good doctor a man must also have a good character, that is to say, whatever weaknesses and foibles he may have, he must love his fellow human beings in the concrete and desire their good before his own.” — W. H. Auden
                    </p>  
                </div>

            </div>

        </div>
    </section>



     
    
 </div>

  );
}

export default Admindoctorhomepage;
