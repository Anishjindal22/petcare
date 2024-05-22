import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="img-div">
        <img
          src="https://res.cloudinary.com/duu15ts5c/image/upload/v1711149165/GouravProject/assests/pexels-svetozar-milashevich-1490908_zdanik.jpg"
          alt="dog-image"
          className="dog-img"
        />
      </div>

      <div className="customer-review">
        <img
          src="https://res.cloudinary.com/duu15ts5c/image/upload/v1716366352/GouravProject/assests/Screenshot_2024-05-22_135331_htt7hl.png"
          alt=""
        />
      </div>
      <div className="tp">
        <TypeAnimation
          className="type-animation"
          sequence={[
            "We provide Dog grooming",
            1000,
            "We provide vetenary services",
            1000,
            "We provide dog walk services",
            1000,
            "We provide dog products",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>

      <div className="sdi">
        <img
          src="https://res.cloudinary.com/duu15ts5c/image/upload/v1716368816/GouravProject/assests/Screenshot_2024-05-22_143634_jdrw9k.png"
          alt=""
          className="sdii"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
