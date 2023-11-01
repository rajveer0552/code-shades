import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import timeicon from "../../assets/images/time-icon.svg";
import documentText from "../../assets/images/document-text.svg";
import StarIcon from "../../assets/images/star-icon.svg";
import recycle from "../../assets/images/recycle-icon.svg";

const ResultsPage = () => {
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const incrementCount = (index, targetCount) => {
    let startnumber = 0;
    const interval = setInterval(() => {
      startnumber++;
      if (startnumber <= targetCount) {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = startnumber;
          return newCounts;
        });
      } else {
        clearInterval(interval);
      }
    }, 80);
  };

  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.result-dna');
      const rect = element.getBoundingClientRect();

    
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        setAnimate(true);
        if (counts[0] === 0 && counts[1] === 0 && counts[2] === 0 && counts[3] === 0) {
          incrementCount(0, 8);
          incrementCount(1, 100);
          incrementCount(2, 30);
          incrementCount(3, 90);
        }
      } 

      else {
        setAnimate(false);
        setCounts([0, 0, 0, 0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  }, [counts]);

  return (
    <section className="result-dna">
      <div className="container">
        <animated.h2 className="sec-title" style={fadeInUp}>
          Results We deliver
        </animated.h2>
        <div className="row">
          <div
            className="col-6 col-md-3"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <animated.div className="res-card" style={fadeInUp}>
              <img src={timeicon} alt="time-icon" />
              <h5 className="count">{counts[0]}</h5>
              <p>Years Of Industries Experience</p>
            </animated.div>
          </div>
          <div
            className="col-6 col-md-3"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <animated.div className="res-card" style={fadeInUp}>
              <img src={documentText} alt="wrong-icon" />
              <h5 className="count">{counts[1]}</h5>
              <p>Projects Completed</p>
            </animated.div>
          </div>
          <div
            className="col-6 col-md-3"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <animated.div className="res-card" style={fadeInUp}>
              <img src={StarIcon} alt="star-icon" />
              <h5 className="count">{counts[2]}</h5>
              <p>Team Of Experts</p>
            </animated.div>
          </div>
          <div
            className="col-6 col-md-3"
            data-aos="fade-up"
            data-aos-duration={2500}
          >
            <animated.div className="res-card" style={fadeInUp}>
              <img src={recycle} alt="recycle-icon" />
              <h5 className="count">{counts[3]}</h5>
              <p>Happy Clients</p>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="parallax" id="result-dna"></div>
    </section>
  );
};

export default ResultsPage;
  
