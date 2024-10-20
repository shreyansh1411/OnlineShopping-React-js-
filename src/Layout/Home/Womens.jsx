import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaEyeSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { ProAPI } from "../API/ProAPI";

function Mens() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(ProAPI["Women"]);
  });
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "#000",
          borderRadius: "50%",
          right: "-10px",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "#000",
          borderRadius: "50%",
          left: "-10px",
          zIndex: 2,
        }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mens">
        <h1>Women's Latest</h1>
        <h6>
          Details to details is what makes Hexashop different from the other
          themes.
        </h6>

        <div className="container-fluid">
          <Slider {...settings}>
            {data &&
              data.map((v) => (
                <div className="col" key={v.id}>
                  <div className="card h-100">
                    <div className="image-container">
                      <div className="hover">
                        <div
                          className="hover-box"
                          style={{ fontSize: 25, paddingTop: 5 }}
                        >
                          <LiaEyeSolid />
                        </div>
                        <div
                          className="hover-box"
                          style={{ fontSize: 25, paddingTop: 4 }}
                        >
                          <FaStar />
                        </div>
                        <div
                          className="hover-box"
                          style={{ fontSize: 25, paddingTop: 5 }}
                        >
                          <FaShoppingCart />
                        </div>
                      </div>
                      <img
                        src={`image/${v.img}`}
                        className="card-img-top"
                        alt="Product"
                      />
                    </div>
                    <div className="productInfo">
                      <div className="nametitle">
                        <h5 className="productName">{v.title}</h5>
                        <p>
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                        </p>
                      </div>
                      <p className="productPrice">{v.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Mens;
