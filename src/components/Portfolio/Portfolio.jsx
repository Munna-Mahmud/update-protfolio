import React, { useContext } from "react";
import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC1 from "../../img/hoc (2).png";
import HOC2 from "../../img/hoc3 (2).png";
import HOC from "../../img/hoc3 (1).png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio text-center" id="portfolio">
      {/* heading */}
      <div className="pb-4">
        <span style={{ color: darkMode ? 'white' : '' }} >Recent </span>
        <span>Projects</span>
        <p>Learning the theory is good, but applying your knowledge on a project is AWESOME!!</p>
      </div>
      <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
        
        <div class="col">
          <div class="card">
            <img src={Sidebar} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Skateboarding</h5>
              <div className="d-flex justify-content-between pt-3">
                <p><a href="https://github.com/Munna-Mahmud/skateboarding_client_side_code" target={"_blank"} className="button s-button text-decoration-none">Server</a></p>
                <p><a href="https://github.com/Munna-Mahmud/skateboarding_client_side_code" target={"_blank"} className="button s-button text-decoration-none">Client</a></p>

                <p><a href="https://go-surf-e8722.web.app/" target={"_blank"} className="button s-button text-decoration-none">Live Site</a></p>
              </div>
            </div>
          </div>
        </div>
      
        <div class="col">
          <div class="card">
            <img src={MusicApp} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Travel With Traveliy </h5>
              <div className="d-flex justify-content-between pt-3">
                <p> <a target={"_blank"} href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-Munna-Mahmud" className="button s-button text-decoration-none">Server</a></p>
                <p><a href="https://github.com/Munna-Mahmud/traveliy-client-site" target={"_blank"} className="button s-button text-decoration-none">Client</a></p>
                <p> <a href="https://travel-with-traveliy.netlify.app/" target={"_blank"} className="button s-button text-decoration-none">Live Site</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Ecommerce} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Nordis Health Care Portal</h5>
              <div className="d-flex justify-content-between pt-3">
                <p> <a href="https://github.com/Munna-Mahmud/nordis-health-care" target={"_blank"} className="button s-button text-decoration-none">GitHub</a></p>
                ||
                <p > <a href="http://nordis-health-care-center.web.app/" target={"_blank"} className="button s-button text-decoration-none">Live Site</a> </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={HOC1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Panda E-commerce</h5>
              <div className="d-flex justify-content-between pt-3">
                <p> <a href="#" target={"_blank"} className="button s-button text-decoration-none">GitHub</a></p>
                ||
                <p > <a href="https://ecommerweb.netlify.app/" target={"_blank"} className="button s-button text-decoration-none">Live Site</a> </p>
              </div>
            </div>
          </div>
        </div>
      
        <div class="col">
          <div class="card">
            <img src={HOC2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Egnineerimng Institue</h5>
              <div className="d-flex justify-content-between pt-3">
                <p> <a href="#" target={"_blank"} className="button s-button text-decoration-none">GitHub</a></p>
                ||
                <p > <a href="https://munna-mahmud.github.io/ENGINEERING-INSTITUTION/" target={"_blank"} className="button s-button text-decoration-none">Live Site</a> </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={HOC} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" style={{ color: darkMode ? 'black' : '' }} >Learn About Islam</h5>
              <div className="d-flex justify-content-between pt-3">
                <p> <a href="#" target={"_blank"} className="button s-button text-decoration-none">GitHub</a></p>
                ||
                <p > <a href="https://learnislam.netlify.app" target={"_blank"} className="button s-button text-decoration-none">Live Site</a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Portfolio;
