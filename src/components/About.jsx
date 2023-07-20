import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mb-5" style={{fontFamily: 'times new roman'}}>
        <div
          className="container"
          style={{ backgroundColor: "#042743", color: "white" }}
        >
          <div className="text-center">
            <h1 className="my-2 text-light">About Us</h1>
          </div>
          <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong className="bg-dark text-light">
                    Customer-Centric Approach
                  </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  Our customers are at the heart of everything we do. We are
                  dedicated to understanding their unique needs and delivering
                  solutions that exceed their expectations.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong className="bg-dark text-light">
                    Reliability and Performance
                  </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  We are committed to providing a highly available and
                  performant cloud environment, ensuring seamless access to data
                  and applications for our users.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed bg-dark text-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <strong className="bg-dark text-light">
                    Security and Privacy
                  </strong>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  We place a high premium on data security and privacy. Our
                  cloud infrastructure is designed with multiple layers of
                  protection to safeguard sensitive information, and we adhere
                  to industry best practices to ensure data confidentiality.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <strong className="bg-dark text-light">
                    Innovation and Adaptability
                  </strong>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  Embracing the ever-evolving technology landscape, we strive to
                  be at the forefront of innovation, ensuring that our cloud
                  services remain relevant and effective in meeting the demands
                  of tomorrow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="container-fluid mt-5">
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "black"}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h3 className="text-uppercase font-weight-bold" style={{fontFamily: 'Times New Roman'}}>
                    NotesCloud
                  </h3>
                  <p >
                  Developed By <span style={{color: 'aqua'}}>Piyush Kumar Singh</span>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    MERN PROJECT
                  </h6>
                  <p>
                    <span className="" style={{color: 'aqua'}}>MongoDB</span>
                  </p>
                  <p>
                    <span className="" style={{color: 'aqua'}}>Express Js</span>
                  </p>
                  <p>
                    <span className="" style={{color: 'aqua'}}>React Js</span>
                  </p>
                  <p>
                    <span className="" style={{color: 'aqua'}}>Node Js</span>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p style={{color: 'aqua'}}>
                    <i className="fas fa-home mr-3"></i> Ranchi, Jharkhand
                  </p>
                  <p style={{color: 'aqua'}}>
                    <i className="fas fa-envelope mr-3"></i> raunaksingh4099@gmail.com
                  </p>
                  <p style={{color: 'aqua'}}>
                    <i className="fas fa-phone mr-3"></i> 7352675671
                  </p>
                  <p style={{color: 'aqua'}}>
                    <i className="fas fa-print mr-3"></i> 7352675671
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "black", color:'aqua', borderRadius : '50%', border : '2px solid aqua'}}
                    to="https://m.facebook.com/profile.php?id=100019846488651"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>

                  {/* <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#55acee"}}
                    to="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link> */}

                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "black", color:'aqua', borderRadius : '50%', border : '2px solid aqua'}}
                    to="https://discord.gg/89AnW3y5"
                    role="button"
                  >
                    <i className="fab fa-discord"></i>
                  </Link>

                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "black", color:'aqua', borderRadius : '50%', border : '2px solid aqua'}}
                    to="https://www.instagram.com/__singh_piyush__/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>

                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "black", color:'aqua', borderRadius : '50%', border : '2px solid aqua'}}
                    to="https://www.linkedin.com/in/piyush-kumar-singh-902036248"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>

                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "black", color:'aqua', borderRadius : '50%', border : '2px solid aqua'}}
                    to="https://github.com/Piyush-kr-Singh"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2023 Copyright : 
            <span className="text-white" to="">
            &nbsp;Maintained By <span className="" style={{color: "aqua"}}>Piyush Kumar Singh</span> 
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
