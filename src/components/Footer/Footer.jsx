import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">

      <div className=" text-center text-white pb-5 p-3 ">

        <ul className="d-flex justify-content-center">
          <li><i class="fa fa-facebook"></i></li>
          <li><i class="fa fa-linkedin"></i></li>
          <li><i class="fa fa-github"></i></li>
          <li><i class="fa fa-twitter-square"></i></li>
        </ul>
        <div className="d-lg-flex justify-content-center ">
          <p className="p-3"><i class="fas fa-house-user me-2"></i>  Savar, Dhaka, Bangladesh</p>
          <p className="p-3"><i class="fas fa-phone me-2"></i>+8801904625620</p>
          <p className="text-white p-3 "><i class="fas fa-envelope me-2"></i> munna.babu705@gmail.com</p>

        </div>
        <span className="fs-6">
          munnababu<i class="fas fa-copyright"></i>copyright2022
        </span>
      </div>
    </div>
  );
};

export default Footer;
