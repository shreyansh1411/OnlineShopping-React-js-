import React from "react";
import { FaInstagram } from "react-icons/fa6";
function Media() {
  return (
    <>
      <div className="media">
        <h1>Social Media</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>

        <div className="media-box">
          <div className="media-box-col">
            <div className="hidden-media">
              <p>Fashion</p>
              {/* <FaInstagram /> */}
            </div>
            <img src="image/instagram-01.jpg" alt="" />
          </div>
          <div className="media-box-col">
            <div className="hidden-media">
              <p>New</p>
              {/* <FaInstagram/> */}
            </div>
            <img src="image/instagram-02.jpg" alt="" />
          </div>
          <div className="media-box-col">
            <div className="hidden-media">
              <p>Brand</p>
              {/* <FaInstagram/> */}
            </div>
            <img
              src="image/instagram-03.jpg"
              height="200"
              width="100%"
              alt=""
            />
          </div>
          <div className="media-box-col">
            <div className="hidden-media">
              <p>Makeup</p>
              {/* <FaInstagram/> */}
            </div>
            <img src="image/instagram-04.jpg" alt="" />
          </div>
          <div className="media-box-col">
            <div className="hidden-media">
              <p>Leather</p>
              {/* <FaInstagram/> */}
            </div>
            <img
              src="image/instagram-05.jpg"
              height="200"
              width="100%"
              alt=""
            />
          </div>
          <div className="media-box-col">
            <div className="hidden-media">
              <p>Bag</p>
              {/* <FaInstagram/> */}
            </div>
            <img
              src="image/instagram-06.jpg"
              height="200"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
