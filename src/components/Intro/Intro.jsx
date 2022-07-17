import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/munna nw.png";
// import glassesimoji from "../../img/glassesimoji.png";
//import glassesimoji from "../../img/Untitled design.mp4";
import thumbup from "../../img/thumbup.png";
import Resume from "../Services/resume.pdf";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

// import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Munna Babu</span>
          <p style={{fontSize: '1rem'}}>
        I am a Web Developer, I'm very passionate and dedicated to my work. With 1+ years experience as a professional a Front-End Developer, I have acquired the skills and knowledge necessary to make your project a success.
          </p>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/Munna-Mahmud"><img src={Github} alt="" /></a>  
       <a href="https://www.linkedin.com/in/munna-mahmud-babu28/"><img src={LinkedIn} alt="" /></a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img style={{width: '50% '}} src={boy} alt="" />
        {/* animation */}
        <motion.div
          // initial={{ left: "-36%", width:'100%' }}
          // whileInView={{ left: "-24%" }}
          // transition={transition}
          // src={glassesimoji}
        
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Front-End" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div Mern"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="MERN Stack " text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
