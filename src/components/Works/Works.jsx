import React, { useContext } from "react";
import "./Works.css";
import me from '../../img/profile2.jpg'
import { themeContext } from "../../Context";
import Portfolio from './../Portfolio/Portfolio';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className=" works row " id="works">
       <div className="col-lg-6 col-md-12 col-sm-12">
      
      <div className="munna">
       
      </div>
    </div>
      {/* left side */}
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            What you Need To Know
          </span>
          <span>About Myself</span>
          <p style={{ color: darkMode ? "white" : "", fontSize:'1rem'  }} >
          I'm a Freshman pursuing  Diploma In Computer Engineering at Mirpur-10, Dhaka, Bangladesh. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work gratifying
          </p>
          <p>I started Learning Code in 2019 when I had just passed my 10th Grade. Before my 10th, I didn't know how to open a computer, but suddenly I got a scholarship at my local area computer center, then I completed my basic MS Office and Computer skills. In the last period of 2019, I was admitted to Diploma engineering, then I heard about coding, software, and Web Development. I started learning by myself. So It's 2022. Now I'm a Junior Developer. Still a long way to go. Currently Learning MERN Stack. <br /> (Thank You)</p>
        </div>

        {/* right side */}
      </div>
     
    </div>
  );
};

export default Works;
