import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="container">
      <h1>Testimonials</h1>

      <div className="testimonials">
        <img
          src={next_icon}
          alt=""
          className="next-icon"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Nora Charles</h3>
                    <span>Chicago</span>
                  </div>
                </div>
                <p>
                  Edusity focus on practical learning and industry collaboration
                  has been invaluable. The professors are all experienced
                  professionals who bring real-world knowledge into the
                  classroom. I feel confident that I'll be well-prepared for a
                  career in tech after graduation."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Alan Chole</h3>
                    <span>Chicago</span>
                  </div>
                </div>
                <p>
                  Edusity focus on practical learning and industry collaboration
                  has been invaluable. The professors are all experienced
                  professionals who bring real-world knowledge into the
                  classroom. I feel confident that I'll be well-prepared for a
                  career in tech after graduation."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Nila Den</h3>
                    <span>NY</span>
                  </div>
                </div>
                <p>
                  Edusity focus on practical learning and industry collaboration
                  has been invaluable. The professors are all experienced
                  professionals who bring real-world knowledge into the
                  classroom. I feel confident that I'll be well-prepared for a
                  career in tech after graduation."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Sophia Princeston</h3>
                    <span>London</span>
                  </div>
                </div>
                <p>
                  Edusity focus on practical learning and industry collaboration
                  has been invaluable. The professors are all experienced
                  professionals who bring real-world knowledge into the
                  classroom. I feel confident that I'll be well-prepared for a
                  career in tech after graduation."
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
