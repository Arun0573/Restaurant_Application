import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>
                We're passionate about creating culinary experiences that
                delight your taste buds and leave you wanting more.
              </p>
            </div>
            <p className="mid">
              We believe that food should be more than sustenance. It's a
              way to connect with friends, family, and loved ones. It's a
              celebration of life and culture. That's why we pour our hearts
              into every dish we create, using fresh, high-quality ingredients
              and traditional cooking techniques.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
