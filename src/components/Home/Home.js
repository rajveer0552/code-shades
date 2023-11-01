import React from 'react'

 const LOGo_IMAGE = "https://assets4.lottiefiles.com/private_files/lf30_xeb8piyr.json";


const Home = () => {
  return (

<div className="heroBanner">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="heroA">
          <h1 className="sec-title">
            Providing the Best <span>Development</span> Talent.
          </h1>
          <p>
            Our goal is to align company targets with individual growth and help
            our clients and employees reach their respective targets both
            professionally and personally.
          </p>
      
        </div>
      </div>
      <div className="col-md-6">
        <div className="heroB">
          <lottie-player
            src={LOGo_IMAGE}
            background="transparent"
            speed={1}
            loop=""
            autoPlay=""
          />
        </div>
      </div>
    </div>
  </div>

</div>

  )
}

export default Home