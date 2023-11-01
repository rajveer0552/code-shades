import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import AboutUsImage from '../../assets/images/aboutUs-img.svg';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-us');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        setAnimate(true);
      } 
      else {
        setAnimate(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className="about-us" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5" data-aos="fade-left">
            <animated.img
              src={AboutUsImage}
              alt="about-img"
              className="aboutImg"
              style={fadeInLeft}
            />
          </div>
          <div className="col-12 col-md-7" data-aos="fade-right">
            <div className="cs-about-details">
              <animated.h2 className="sec-title" style={fadeInRight}>About Us</animated.h2>
              <animated.p style={fadeInRight}>
                <b>Code-Shades Technologies</b> is a Software Development,
                Information Technology Services company that offers fully fledged
                services for software development and effective management to its
                clients. The company has its presence in Indore and is driven by the
                industry’s highly professional and trained individuals. We are
                peopled by young, curious, and energetic minds who are always ready
                to take on new challenges. The company aims at providing a
                productive and innovative environment for our employees to excel in
                the world of Information technology because for us our employees are
                our true asset.
              </animated.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
