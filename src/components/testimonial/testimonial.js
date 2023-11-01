import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import userIcon from "../../assets/images/userIcon.png"

const Testimonial = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1000 },
  });

  const fadeInLeft = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 800 },
  });

  const fadeInRight = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 800 },
  });

  return (
    <section className="testimonial">
    <div className="testi-sec-inner">
      <div className="container">
        <h2 className="sec-title text-center" style={fadeInUp}>
          <span>Clients</span> Review
        </h2>
        <div id="testimonial" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <animated.div className="carousel-item active" style={fadeInLeft}>
              <div className="testi-content">
                <animated.img
                  className="rounded-circle shadow-1-strong"
                  src={userIcon}
                  alt="Mario-ThinkNow-Research"
                  style={fadeInUp}
                />
                <div className="row d-flex">
                  <animated.h5 className="mb-3" style={fadeInLeft}>
                    Lorem ipsum dolor sit amet
                  </animated.h5>
                  <animated.p className="caption-text" style={fadeInRight}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </animated.p>
                  <animated.p className="captioner" style={fadeInRight}>
                    <span>- John Doe,</span> USA, CEO
                  </animated.p>
                </div>
              </div>
            </animated.div>
            <div className="carousel-item">
              <div className="testi-content justify-content-center col-md-9 m-auto">
                <img
                  className="rounded-circle shadow-1-strong"
                  src={userIcon}
                  alt="Mario-ThinkNow-Research"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                />
                <div
                  className="row d-flex"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h5 className="mb-3">Excepteur sint occaecat cupidatat</h5>
                  <p className="caption-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="captioner">
                    <span>- MARIO CARRASCO,</span> THINKNOW, COFOUNDER
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testi-content justify-content-center col-md-9 m-auto">
                <img
                  className="rounded-circle shadow-1-strong"
                  src={userIcon}
                  alt="Mario-ThinkNow-Research"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                />
                <div
                  className="row d-flex"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                >
                  <h5 className="mb-3">“The Wrong Hire is Detrimental”</h5>
                  <p className="caption-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="captioner">
                    <span>- MARIO CARRASCO,</span> THINKNOW, COFOUNDER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Testimonial