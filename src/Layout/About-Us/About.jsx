import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function About() {
  return (
    <>
      <div className="about">
        <h1 style={{ fontSize: 60, color: "white", fontWeight: 800 }}>
          About Our Company
        </h1>
        <p style={{ fontSize: 20, color: "white", fontWeight: 400 }}>
          Awesome, clean & creative HTML5 Template
        </p>
      </div>

      <div className="skills">
        <div className="skills-col-1">
          <img src="image/about-left-image.jpg" alt="" />
        </div>
        <div className="skills-col-2">
          <h1>About Us & Our Skills</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>
          <div className="quote">
            <FaQuoteLeft style={{ fontSize: 25 }} />
            <p style={{ margin: 0 }}>
              You are not allowed to redistribute this template ZIP file on any
              other website.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip.
          </p>

          {/* <FaFacebook /><AiFillTwitterCircle /> */}
        </div>
      </div>

      <div className="team">
        <h1 style={{ fontSize: 40, color: "#2a2a2a", fontWeight: 700 }}>
          Our Amazing Team
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#a1a1a1",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Details to details is what makes Hexashop different from the other
          themes.
        </p>

        <div className="member">
          <div className="member-img">
            <img
              src="image/team-member-01.jpg"
              height="350px"
              width="100%"
              alt=""
            />
            <h1>Ragnar Lodbrok</h1>
            <p>Product Caretaker</p>
          </div>
          <div className="member-img">
            <img
              src="image/team-member-02.jpg"
              height="350px"
              width="100%"
              alt=""
            />
            <h1>Ragnar Lodbrok</h1>
            <p>Product Caretaker</p>
          </div>
          <div className="member-img">
            <img
              src="image/team-member-03.jpg"
              height="350px"
              width="100%"
              alt=""
            />
            <h1>Ragnar Lodbrok</h1>
            <p>Product Caretaker</p>
          </div>
        </div>
      </div>

      <div className="service">
        <h1 style={{ fontSize: 40, color: "#2a2a2a", fontWeight: 700 }}>
          Our Services
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#a1a1a1",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Details to details is what makes Hexashop different from the other
          themes.
        </p>

        <div className="service-details">
          <div className="service-img">
            <h1
              style={{
                fontSize: 25,
                color: "#2a2a2a",
                fontWeight: "bold",
                marginTop: 30,
              }}
            >
              Synther Vaporware
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#2a2a2a",
                fontWeight: 400,
                marginTop: 25,
                marginBottom: 40,
                lineHeight: 1.5,
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consecteturti adipiscing elit, sed do
              <br />
              eiusmod temp incididunt ut labore, et
              <br />
              dolore quis ipsum suspend.
            </p>
            <img src="image/service-01.jpg" alt="" />
          </div>
          <div className="service-img">
            <h1
              style={{
                fontSize: 25,
                color: "#2a2a2a",
                fontWeight: "bold",
                marginTop: 30,
              }}
            >
              Locavore Squidward
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#2a2a2a",
                fontWeight: 400,
                marginTop: 25,
                marginBottom: 40,
                lineHeight: 1.5,
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consecteturti adipiscing elit, sed do
              <br />
              eiusmod temp incididunt ut labore, et
              <br />
              dolore quis ipsum suspend.
            </p>
            <img src="image/service-02.jpg" alt="" />
          </div>
          <div className="service-img">
            <h1
              style={{
                fontSize: 25,
                color: "#2a2a2a",
                fontWeight: "bold",
                marginTop: 30,
              }}
            >
              Health Gothfam
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#2a2a2a",
                fontWeight: 400,
                marginTop: 25,
                marginBottom: 40,
                lineHeight: 1.5,
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consecteturti adipiscing elit, sed do
              <br />
              eiusmod temp incididunt ut labore, et
              <br />
              dolore quis ipsum suspend.
            </p>
            <img src="image/service-03.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
