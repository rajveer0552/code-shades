import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function VisionMissionSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.get-right');
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        // Scrolled into view, animate
        setAnimate(true);
      } else {
        // Scrolled out of view, reverse animation
        setAnimate(false);
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

  return (
    <section className="get-right" id="get-right">
      <div className="container">
        <animated.h2 className="sec-title text-center" style={fadeInUp}>
          Our Vision & Mission
        </animated.h2>
        <div className="row">
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up" data-aos-duration="1000">
            <animated.div className="card" style={fadeInUp}>
              <h5>Vision</h5>
              <p>
                Our vision is to emerge as a globally recognized company by providing the superior quality services and solutions to our clients along with Meeting expectations of our customers, employees, partners, and stakeholders.
              </p>
            </animated.div>
          </div>
          <div className="col-12 col-md-6 mb-3" data-aos="fade-up" data-aos-duration="1000">
            <animated.div className="card" style={fadeInUp}>
              <h5>Mission</h5>
              <p>
                We would strive to enrich our people in their skills and empower them so that they deliver innovative and scalable IT solutions that provide customer-centric, result-oriented, cost-competitive innovative & functional IT Solution and value to our client's business.
              </p>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="parallax" id="get-right"></div>
    </section>
  );
}

export default VisionMissionSection;
