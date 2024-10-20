import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Explore() {
  return (
    <>
      <div className="Explore">
        <div className="Explore-left">
          <h1 style={{ fontSize: 40, fontWeight: "bold", marginLeft: 120 }}>
            Explore Our Products
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 120,
              color: "Silver Chalice",
              marginTop: 30,
              color: "#a1a1a1",
            }}
          >
            You are allowed to use this HexaShop HTML CSS template. You can feel
            <br />
            free to modify or edit this layout. You can convert this template as
            any
            <br />
            kind of ecommerce CMS theme as you wish.
          </p>

          <div className="quote">
            <FaQuoteLeft style={{ fontSize: 25 }} />
            <p style={{ margin: 0 }}>
              You are not allowed to redistribute this template ZIP file on any
              other website.
            </p>
          </div>

          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 120,
              color: "Silver Chalice",
              marginTop: 30,
              color: "#a1a1a1",
            }}
          >
            There are 5 pages included in this HexaShop Template and we are
            <br />
            providing it to you for absolutely free of charge at our TemplateMo
            <br />
            website. There are web development costs for us.
          </p>

          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 120,
              color: "Silver Chalice",
              marginTop: 30,
              color: "#a1a1a1",
            }}
          >
            If this template is beneficial for your website or business, please
            kindly
            <br />
            <a href="" style={{ textDecoration: 0 }}>
              support us
            </a>{" "}
            a little via PayPal. Please also tell your friends about our
            <br />
            great website. Thank you.
          </p>

          <button>Discover More</button>
        </div>

        <div className="Explore-right">
          <div className="row1">
            <div className="poster">
              <h3
                style={{
                  fontSize: 30,
                  marginTop: 100,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Leather Bags
              </h3>
              <p
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  color: "#aaa",
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                Latest Collection
              </p>
            </div>
            <div className="poster">
              <img src="image/explore-image-01.jpg" alt="" />
            </div>
          </div>

          <div className="row1 mt-5">
            <div className="poster">
              <img src="image/explore-image-02.jpg" alt="" />
            </div>
            <div className="poster">
              <h3
                style={{
                  fontSize: 30,
                  marginTop: 100,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Different Types
              </h3>
              <p
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  color: "#aaa",
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                Over 304 Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
