import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import healthcare from "../../assets/images/healthcare.png";
import ecommerce from "../../assets/images/online-shop.png";
import banking from "../../assets/images/money-transfer.png";
import realEstate from "../../assets/images/conversation.png";
import logistics from "../../assets/images/delivery.png";
import education from "../../assets/images/education.png";
import communications from "../../assets/images/chat.png";
import mediaTechnology from "../../assets/images/social-media.png";
import automotive from "../../assets/images/setting.png";


const industryData = [
  {
    industry: 'Health Care',
    image: healthcare,
    content: {
      title: 'Healthcare',
      text: 'Improve your patient care by optimizing and implementing crucial technology advancements. We understand the importance of providing a seamless and efficient experience for both patients and healthcare providers. In the healthcare sector, precision and accuracy are paramount. We offer innovative technologies and services that help healthcare providers streamline their operations, ensuring better patient care and compliance.',
    },
  },
  {
    industry: 'Ecommerce',
    image: ecommerce,
    content: {
      title: 'Ecommerce',
      text: 'Reinforce digital capabilities to improve operational efficiency, boost productivity, and reduce costs. We specialize in providing comprehensive e-commerce solutions that empower businesses to thrive in the online marketplace.',
    },
  },
  {
    industry: 'Banking',
    image: banking,
    content: {
      title: 'Banking',
      text: 'We implement a smart, secure, and digitally automated platform to manage the cumbersome financial processes and improve your performance. To stay competitive and meet the diverse needs of customers, we provide a wide range of banking solutions that help financial institutions thrive in a dynamic marketplace.',
    },
  },
  {
    industry: 'Real Estate',
    image: realEstate,
    content: {
      title: 'Real Estate',
      text: 'We specialize in offering a wide range of real estate services to help our clients navigate the dynamic and exciting world of property transactions. Our team has extensive experience in offering value-added solutions for your requirements that help you achieve increased efficiency, higher productivity, and a customer-centric experience.',
    },
  },
  {
    industry: 'Logistics',
    image: logistics,
    content: {
      title: 'Logistics',
      text: 'Our custom solutions help you streamline your operations, reduce costs, and enhance customer experience. We are proud to offer a wide range of logistics solutions to streamline operations and enhance efficiency.',
    },
  },
  {
    industry: 'Education',
    image: education,
    content: {
      title: 'Education',
      text: 'Your partner in education and a gateway to a brighter future. We are dedicated to providing innovative and transformative education solutions that empower learners of all ages to reach their full potential.',
    },
  },
  {
    industry: 'Communications',
    image: communications,
    content: {
      title: 'Communication',
      text: 'Effective communication is the cornerstone of successful businesses and organizations. We specialize in providing a range of communication services designed to enhance connectivity, collaboration, and engagement within your company.',
    },
  },
  {
    industry: 'Media & Technology',
    image: mediaTechnology,
    content: {
      title: 'Media and Technology',
      text: 'In the fast-evolving landscape where media and technology converge, innovation and connectivity drive the industry forward. We specialize in providing a range of services tailored to meet the unique needs of businesses operating at this exciting intersection.',
    },
  },
  {
    industry: 'Automotive',
    image: automotive,
    content: {
      title: 'Automotive',
      text: 'We are passionate about technology and committed to accelerating innovation within the automotive sector. Whether you\'re an established automobile manufacturer or a startup disrupting the industry, we\'re here to empower your journey with unparalleled IT services.',
    },
  },
];



const IndustriesSurve = () => {
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.we-surve');
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 20) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardFadeIn = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1000 },
  });

  const handleModalToggle = (industry) => {
    setCurrentIndustry(industry);
    setShowModal(true);
  };

  const handleCardMouseLeave = () => {
    setShowModal(false);
  };
  const flowerOpenAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const AnimatedModalContent = styled(animated.div)`
  animation: ${flowerOpenAnimation} 1s ease-in-out; /* You can adjust the duration as needed */
  transform-origin: center;
`;
  return (
    <section className="we-surve">
      <div className="container">
        <h2 className="sec-title">Industries We Serve</h2>
        <div className="row">
          {industryData.map((industryInfo, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <animated.div
                className="card"
                style={cardFadeIn}
                onMouseEnter={() => handleModalToggle(industryInfo.industry)}
                onMouseLeave={handleCardMouseLeave}
              >
                <h5>{industryInfo.industry}</h5>
                <span>{industryInfo.industry.charAt(0)}</span>
                <img src={industryInfo.image} alt={industryInfo.industry} />
              </animated.div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
  <div className="modal-dialog" role="document">
    <AnimatedModalContent className="modal-content" style={cardFadeIn}>
      <div className="modal-header">
        <h5 className="modal-title">{industryData.find(info => info.industry === currentIndustry)?.content?.title}</h5>
      </div>
      <div className="modal-body">
        {industryData.find(info => info.industry === currentIndustry)?.content?.text}
      </div>
    </AnimatedModalContent>
  </div>
)}
    </section>
  );
};

export default IndustriesSurve;