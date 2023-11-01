import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import footerPatternImg from '../../assets/images/footer_pattern.png';


const ContactPage = () => {
  const mapRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    window.scrollTo(0, 0);

    function initMap() {
      // const map = new window.google.maps.Map(mapRef.current, {
      //   center: { lat: 37.7749, lng: -122.4194 },
      //   zoom: 12,
      // });
    }
    if (typeof window.google === 'undefined' || typeof window.google.maps === 'undefined') {
      window.initMap = initMap;
    } else {
      initMap();
    }
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fadeInLeft = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 1200 },
  });

  const fadeInRight = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 1200 },
  });

  return (
    <div>
      <div className="pageBanner">
        <img src={footerPatternImg}  className="pagebanner-img" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="pageBannerHead">
                <animated.h2 style={fadeInLeft}>Contact</animated.h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactDetails">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <animated.form className="contactForm" onSubmit={handleSubmit} style={fadeInLeft}>
                <h2>Get in touch</h2>
                <p>Want to make your website awesome?</p>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingText" placeholder="Name" />
                  <label htmlFor="floatingText">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="Enter your email" />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: '100px' }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <button className="primary-btn" type="submit">
                  Send
                </button>
              </animated.form>
            </div>
            <div className="col-md-7">
              <animated.div id="map" style={fadeInRight} ref={mapRef}></animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
