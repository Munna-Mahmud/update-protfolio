import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className="container skill-container" id="skill">
      <div className="text-center p-5">
       <span className="skill-title">My Skills </span>
      </div>
      <div class="row text-center  ">

        <div class="col-lg-6 col-md-12 col-sm-12 back1  " style={{backgroundColor: '#b4bbc3'}}>
          <span className="fw-bold " style={{color:"#3079ab", fontSize:'1.5rem'}}>FrontEnd Development</span>
          <div className=" skills mt-2 text-start">
            <div className="ps-2 pe-2   ">
              <small><i class="fas fa-certificate"></i> HTML</small>
            </div>
            <div className="ps-2 pe-2   ">
              <small> <i class="fas fa-certificate"></i> CSS</small>
            </div>
            <div className=" ps-2 pe-2   ">
              <small> <i class="fas fa-certificate"></i> JavaScript</small>
            </div>
            <div className="ps-2 pe-2  ">
              <small > <i class="fas fa-certificate"></i> React</small>
            </div>
            <div className=" ps-2 pe-2   ">
              <small> <i class="fas fa-certificate"></i> Tailwind</small>
            
            </div>
            <div className=" ps-2 pe-2   ">
              <small> <i class="fas fa-certificate"></i> Bootstrap</small>
            </div>
            <div className=" ps-2 pe-2  ">
              <small> <i class="fas fa-certificate"></i> Material UI</small>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6 col-md-12 col-sm-12 back2 p-2" style={{backgroundColor: '#b4bbc3'}}>
          <span className="fw-bold" style={{color:"#3079ab", fontSize:'1.5rem'}}>Backend Development</span>
          <div className=" skills mt-2 text-start">
            <div className="ps-2 pe-2   ">
              <small><i class="fas fa-certificate"></i> Node JS</small>
            </div>
            <div className="ps-2 pe-2   ">
              <small><i class="fas fa-certificate"></i> MongoDB</small>
            </div>
            <div className=" ps-2 pe-2   ">
              <small><i class="fas fa-certificate"></i> Express JS</small>
            </div>
            <div className="ps-2 pe-2   ">
              <small> <i class="fas fa-certificate"></i> Python(Basic)</small>
            </div>
      
          </div>
        </div>
      </div>


    </div>




  );
};

export default Experience;
