import React, { useContext } from "react";
import "./Works.css";
import me from '../../img/munna.jpeg'
import { themeContext } from "../../Context";
import Portfolio from './../Portfolio/Portfolio';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className=" about-info " id="works">
      <section className="" >
        <div>
            <div className="row  bg-gradient d-flex align-items-center rounded-3 ">
             
                <div className="col-lg-5 about-img">

                    <img src={me} className="d-block w-100  " alt="..."/>
                </div>

                <div className="col-lg-7">
                    <h1 style={{ color: darkMode ? "white" : "", fontSize:"2.5rem", fontWeight:"bold" }} >  What you Need To  Know <br /><span style={{color:'#3079ab' , fontSize:"2.5rem", fontWeight:"bold"}} className=" " > About Myself</span>
                    </h1>
                    
                    <p  style={{ color: darkMode ? "white" : "", fontSize: '1rem' }}>I'm a Freshman pursuing  Diploma In Computer Engineering at Mirpur-10, Dhaka, Bangladesh. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work gratifying. <br />

                    I started Learning Code in 2019 when I had just passed my 10th Grade. Before my 10th, I didn't know how to open a computer, but suddenly I got a scholarship at my local area computer center, then I completed my basic MS Office and Computer skills. In the last period of 2019, I was admitted to Diploma engineering, then I heard about coding, software, and Web Development. I started learning by myself. So It's 2022. Now I'm a Junior Developer. Still a long way to go. Currently Learning MERN Stack. <br /> (Thank You)
                    </p>
                </div>
            </div>
        </div>
     
    </section>

    </div>
  );
};

export default Works;


