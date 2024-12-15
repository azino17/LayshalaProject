import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navigate = useNavigate();

  const handleClickStudent = () => {
    alert("Please register first.");
    navigate("/register");
  };

  const handleClickAdmin = () => {
    alert("Please login first.");
    navigate("/login");
  };

  return (
    <>
      {/* Footer */}
      <footer
        className="text-center text-white text-lg-start text-muted"
        style={{
          backgroundColor: "#B8860B",
          color: "white",
          padding: "20px 0",
        }}
      >
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block" style={{color:"white",fontFamily:"Noto Sans"}}>
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <Link to="{}" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4 text-white" style={{fontFamily:"Noto Sans"}}>
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p className="text-white" style={{ textAlign: "justify",fontFamily:"Noto Sans"}}>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
            

              {/* Grid column */}
              <div
                className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ fontFamily: "Noto Sans", color: "#FFFFFF" }}
              >
                {/* Links */}
                <h6 className=" text-uppercase fw-bold mb-4">Students</h6>
                <p>
                  <Link
                    to="/login/student"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Student's Login
                  </Link>
                </p>
                <p>
                  <Link
                    to="/register"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Student's Registration
                  </Link>
                </p>
                <p>
                  <span
                    className="text-reset"
                    onClick={handleClickStudent}
                  >
                    <Link
                      to="#!"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      Courses
                    </Link>
                  </span>
                </p>
                <p>
                <span
                    className="text-reset"
                    onClick={handleClickStudent}
                  >
                  <Link
                    to="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Online Materials
                  </Link>
                  </span>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div
                className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ fontFamily: "Noto Sans", color: "#FFFFFF" }}
              >
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Admins</h6>
                <p>
                  <Link
                    to="/login"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Admin's Login
                  </Link>
                </p>
                <p>
                <span
                    className="text-reset"
                    onClick={handleClickAdmin}
                  >
                  <Link
                    to="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Admin's Registration
                  </Link>
                  </span>
                </p>
                <p>
                <span
                    className="text-reset"
                    onClick={handleClickAdmin}
                  >
                  <Link
                    to="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Courses
                  </Link>
                  </span>
                </p>
                <p>
                <span
                    className="text-reset"
                    onClick={handleClickAdmin}
                  >
                  <Link
                    to="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Online Materials
                  </Link>
                  </span>
                </p>
              </div>
           

              {/* Grid column */}
              <div
                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                style={{ fontFamily: "Noto Sans", color: "#FFFFFF" }}
              >
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} /> layshalafoundation
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} /> layshalafoundation
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faFacebookF} /> layshalafoundation
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} /> layshalafoundation
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright: All rights reserved &nbsp;
          <Link className="text-reset fw-bold" to="https://layshala.org/">
            Layshala.org
          </Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
