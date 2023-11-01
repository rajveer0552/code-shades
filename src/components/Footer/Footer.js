import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import FooterImg from "../../assets/images/footer_pattern.png";
import FooterLogo from "../../assets/images/cs-logo-main.png";
import Linkdin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";

const Footer = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('footer');
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.75) {
        setAnimate(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Reset the animation state when navigating to a new route
    return navigate(() => {
      setAnimate(false);
    });
  }, [navigate]);

  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1500 },
  });

  const fadeInRight = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 1500 },
  });

  return (
    <footer style={fadeInUp}>
      <img src={FooterImg} alt="footer_pattern" className="footer-bg" />
      <div className="container">
        <div className="row top-footer-second-row">
          <div className="col-md-6">
            <div className="top-footer-second-left">
              <animated.img
                className="cs-footer-logo"
                src={FooterLogo}
                alt="white-logo"
                style={fadeInUp}
              />
              <address>
                <animated.div style={fadeInRight}>
                  4th Floor Office No. 203, Nihal palace 31, Kanadia Rd, opposite digamber jain temple, Sanvid Nagar, Indore, Madhya Pradesh 452018
                </animated.div>
                <a href="tel:+91 7974639114" style={fadeInRight}>+91 7974639114</a>
              </address>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social">
              <a href="https://www.linkedin.com/company/code-shades">
                <animated.img src={Linkdin} alt="linkedin" style={fadeInRight} />
              </a>
              <a href="https://www.instagram.com/codeshades">
                <animated.img src={Instagram} alt="instagram" style={fadeInRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="row bottom-footer">
          <animated.div style={fadeInRight} className="col-12 py-0">
            <div className="cs-copyright">
              <div className="short-link">© Code-Shades 2023</div>
              <div className="short-link">
                <a href="career.html"> Career</a>
              </div>
              <div className="short-link">
                <a href="terms.html">Terms</a>
              </div>
            
            </div>
          </animated.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
