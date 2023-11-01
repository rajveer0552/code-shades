import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import VisionMissionSection from './components/VisionMissionSection/VisionMissionSection';
import ResultsPage from './components//Result/ResultsPage';
import IndustriesSurve from './components//Industries/IndustriesSurve';
import Portfolio from './components/portfolio.js/portfolio';
import AboutUs from './components/aboutus/AboutUs';
import Careers from "./components/career/careerPage"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import LifeofCode from './components/lifeofcodeshades/lifecodeshades';
import ContactPage from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/cs-style.css';

function App() {
  return (
  <>
  <Router>
  <Navbar/>
      <Routes>
      <Route exact  path="/"
          element={
          <>
            <Home />
            <AboutUs key={1} />
            <VisionMissionSection/>
            <ResultsPage/>
            <IndustriesSurve/>
            <Portfolio/>
          </>
        }
        />
         <Route path='/Careers' element={<Careers/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/LifeofCode' element={<LifeofCode/>}/>
  <Route path='/ContactPage' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
