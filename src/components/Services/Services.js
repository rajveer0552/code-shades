import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import footerPatternImg from '../../assets/images/footer_pattern.png'; 
import websiteDevIcon from '../../assets/json/website-dev.json'; // Import icon assets
import softwareDevIcon from '../../assets/json/software-dev.json'; // Import icon assets
import websiteDesignIcon from '../../assets/json/website-design.json'; // Import icon assets
import eCommerceDevIcon from '../../assets/json/eCommerce-dev.json'; // Import icon assets
import fullStackIcon from '../../assets/json/full-stack.json'; // Import icon assets
import hrPortalIcon from '../../assets/json/hr-portal.json'; // Import icon assets
import mvpIcon from '../../assets/json/mvp.json';

function ServicePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.serviceDetails');
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
    <div>
      <div className="pageBanner">
        <img src={footerPatternImg} className="pagebanner-img" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="pageBannerHead">
                <animated.h2 className="sec-title text-center" style={fadeInUp}>
                  Our Services
                </animated.h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="serviceDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInLeft}>
                <lord-icon
                  src={websiteDevIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>Website Development</h4>
                <p>
                We bring websites come to life. We offer a wide range of web development services to bring your vision to the web. We stay at the forefront of web development trends and technologies to ensure your website or app is equipped with the latest features and functionality.
                </p>
              </animated.div>
            </div>
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInRight}>
                <lord-icon
                  src={softwareDevIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>Software Development</h4>
                <p>
                We offer a comprehensive suite of software development services designed to cater to diverse needs. Our team of software engineers and developers have a track record of delivering cutting-edge solutions that drive results. We stay up-to-date with the latest technologies and methodologies, ensuring your software is built with the best practices.
                </p>
              </animated.div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInLeft}>
                <lord-icon
                  src={websiteDesignIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>Website Design</h4>
                <p>
                Our web design service provides SEO-friendly website design services that aim to boost your search rankings, increase your online exposure and convert page visitors into paying customers. A custom and interactive web page builds consumer trust and gain market referrals.
               </p>
              </animated.div>
            </div>
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInRight}>
                <lord-icon
                  src={eCommerceDevIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>E-Commerce Development</h4>
                <p>
                We develop custom e-commerce platforms. User-friendly interfaces that drive conversions and boost sales by creating features like online shopping carts, payment gateways, and inventory management.
                </p>
              </animated.div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInLeft}>
                <lord-icon
                  src={fullStackIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>Full-Stack Development</h4>
                <p>
                We offer a wide range of full stack development services designed to meet the diverse needs of businesses and organizations. We provide tailored web solutions that align perfectly with your business goals.
We create User-friendly interfaces and responsive designs and focus on integration of cutting-edge technologies to enhance use r experiences.
                </p>
              </animated.div>
            </div>
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInRight}>
                <lord-icon
                  src={hrPortalIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>HR Portals</h4>
                <p>
                We create HR portal for your organization to centralize and streamline various HR functions, this also serves as a one-stop destination for all  your human resources needs. Through this we provide employees and managers with easy access to essential HR services and resources, making your work-life more efficient and convenient.
                </p>
              </animated.div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <animated.div className="card" style={fadeInLeft}>
                <lord-icon
                  src={mvpIcon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#237cb2"
                ></lord-icon>
                <h4>MVP Development </h4>
                <p>
                With an MVP, you will be able to test your idea in the real world much faster than otherwise. we specialize in turning your innovative ideas into reality through the development of Minimum Viable Products (MVPs)
                </p>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
