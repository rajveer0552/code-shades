import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/portfolio/CaratLane-A-Tanishq-Partnership-Best-Store-for-Online-Jewellery-Shopping.png';
import image2 from '../../assets/images/portfolio/Empowering-Data-Driven-Medicine-with-PatientIQ.png';
import image3 from '../../assets/images/portfolio/Modern-Commercial-Real-Estate-Technology-Solutions.png';
import image4 from '../../assets/images/portfolio/Purchasing-Software-Create-Purchase-Orders-ProcurementExpress-com.png';
import image5 from '../../assets/images/portfolio/SellerChamp-Multi-Channel-Ecommerce-Listing-Software.png';
import image6 from '../../assets/images/portfolio/TapGoods-PRO-All-In-One-Rental-Software.png';

const PortfolioSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
  };



  return (
    <section className="cs_portfolio">
      <h2 className="sec-title text-center">Our Portfolio</h2>
      <div id="cs_portfolio"  >
        <Slider {...settings} >
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image1}
                alt="CaratLane-A-Tanishq-Partnership"
                className="portfolio-image"
       

              />
            </div>
          </div>
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image2}
                alt="gghghghghgf"
                className="portfolio-image"
              />
            </div>
          </div>
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image3}
                alt=""
                className="portfolio-image"
              />
            </div>
          </div>
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image4}
                alt=""
                className="portfolio-image"
            

              />
            </div>
          </div>
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image5}
                alt=""
                className="portfolio-image"
           

              />
            </div>
          </div>
          <div className="item">
            <div className="portfolio-content">
              <img
                src={image6}
                alt=""
                className="portfolio-image"
       

              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
