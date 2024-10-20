import { useEffect, useState } from "react";
import { ProAPI } from "../API/ProAPI";
import { LiaEyeSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Product(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(ProAPI["Products"]);
  });

  return (
    <>
      <div className="product">
        <h1>Check Our Products</h1>
        <p>Awesome, clean & creative HTML5 Template</p>
      </div>

      <div className="product-list">
        <h1 style={{ fontSize: 40, color: "#2a2a2a", fontWeight: 800 }}>
          Our Latest Products
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#a1a1a1",
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          Check out all of our products.
        </p>

        <div className="container mt-5" style={{ paddingBottom: 100 }}>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 g-4">
            {data &&
              data.map((v) => (
                <div className="col" key={v.id} style={{ height: "72%" }}>
                  <div className="card h-100" style={{ borderRadius: 0 }}>
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
                        alt="..."
                        style={{ borderRadius: 0, height: "350px" }}
                      />
                    </div>
                    <div className="card-body" style={{ textAlign: "left" }}>
                      <div className="producttitle">
                        <h5
                          className="card-title"
                          style={{ fontWeight: "700", fontSize: 20 }}
                        >
                          {v.title}
                        </h5>
                        <p style={{ fontSize: 18 }}>
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                          <MdOutlineStarPurple500 />
                        </p>
                      </div>
                      <p
                        className="card-text"
                        style={{
                          fontWeight: "500",
                          fontSize: 18,
                          color: "#a1a1a1",
                        }}
                      >
                        {v.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
